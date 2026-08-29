'use client';
import { Heart, Home, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth_context";
import { Dispatch, SetStateAction, useState } from "react";
type Props = {
    openLoginModal: Dispatch<SetStateAction<boolean>>
}
export default function MobileStrip({ openLoginModal }: Props) {
    const router = useRouter();
    const { isAuthenticated, user } = useAuth();
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState("up")
    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = current - previous;
        if (Math.abs(diff) < 2) return;
        setScrollDirection(diff > 0 ? "down" : "up");
    });
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{
                y: scrollDirection === "down" ? 100 : 0
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
            }}
            className='md:hidden fixed inset-x-0 -bottom-1 h-16 w-full z-40'>
            <div className="w-full h-full bg-primary-600 grid grid-cols-4">
                <Link aria-label="Inicio" href={'/'} className="w-full h-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 ease-linear">
                    <Home fill="white" className="text-white" size={28} strokeWidth={1.8} />
                    <span className="sr-only">Inicio</span>
                </Link>
                <Link aria-label="Inicio" href={'/'} className="w-full h-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 ease-linear">
                    <Heart fill="white" className="text-white" size={28} strokeWidth={1.8} />
                    <span className="sr-only">Inicio</span>
                </Link>
                <Link aria-label="Carrito de compra" href={'/'} className="w-full h-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 ease-linear">
                    <ShoppingCart fill="white" className="text-white" size={28} strokeWidth={1.8} />
                    <span className="sr-only">Carrito de compra</span>
                </Link>
                <button aria-label="Cuenta/Perfil" className="w-full h-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 ease-linear cursor-pointer"
                    onClick={() => isAuthenticated ? router.push(`/profile/${user?.customer_id}`) : openLoginModal(true)}
                >
                    <User fill="white" className="text-white" size={28} strokeWidth={1.8} />
                    <span className="sr-only">Cuenta/Perfil</span>
                </button>
            </div>
        </motion.div>
    )
}
