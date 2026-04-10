'use client';
import React, { createContext, useContext, useEffect, useState } from "react"

type User = {
    id: number
    name: string
    email: string
    customer_id: string
}

type AuthContextType = {
    user: User | null
    token: string | null
    isAuthenticated: boolean
    login: (data: any) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const storedToken = localStorage.getItem("access_token")
        const storedUser = localStorage.getItem("user")

        if (storedToken && storedUser) {
            setToken(storedToken)
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const login = (data: any) => {
        const token = data.access_token
        const user = data.customer

        localStorage.setItem("access_token", token)
        localStorage.setItem("user", JSON.stringify(user))

        setToken(token)
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("user")
        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider")
    }
    return context
}