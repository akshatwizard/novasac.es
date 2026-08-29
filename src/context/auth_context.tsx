'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type User = {
    id: number;
    name: string;
    email: string;
    customer_id: string;
};

type AuthContextType = {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    isLoggingOut: boolean;
    login: (data: any) => void;
    logout: () => void;
};

function setCookie(name: string, value: string, days = 7) {
    const maxAge = days * 24 * 60 * 60;
    const isProd = process.env.NODE_ENV === "production";

    document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Lax; ${isProd ? "Secure;" : ""}`;
}

function getCookie(name: string) {
    if (typeof document === "undefined") return null;

    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
}

function deleteCookie(name: string) {
    document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = getCookie("access_token");

        if (token) {
            setToken(token);
            axios.get("https://admin.novasac.es/api/customer/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                    const userRaw = res.data.data;

                    const user = {
                        ...userRaw,
                        customer_id: userRaw.customer_id || userRaw.id,
                    };

                    setUser(user);                    
                })
                .catch(() => {
                    deleteCookie("access_token");
                    setToken(null);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = (data: any) => {
        const token = data.access_token;
        const userRaw = data.customer;

        const user = {
            ...userRaw,
            customer_id: userRaw.customer_id || userRaw.id,
        };

        setCookie("access_token", token);

        setToken(token);
        setUser(user);

        router.push(`/profile/${user.customer_id}`);
    };

    const logout = async () => {
        if (isLoggingOut) return; // prevent double click

        setIsLoggingOut(true);

        try {
            if (token) {
                await axios.post(
                    "https://admin.novasac.es/api/customer/logout",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            }
        } catch (e) {
            console.error("Logout error", e);
        }

        deleteCookie("access_token");
        setToken(null);
        setUser(null);

        router.push("/");
        toast.success("Logout Successful...!!");

        setIsLoggingOut(false);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!token,
                loading,
                login,
                logout,
                isLoggingOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};
