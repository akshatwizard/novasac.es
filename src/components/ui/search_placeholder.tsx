"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function SearchPlaceholder({ hidden }: { hidden: boolean }) {
    const items: string[] = [
        "packing bags...",
        "poly bags, courier bags...",
        "laminated packaging bags...",
        "food packaging bags...",
        "industrial packaging bags...",
        "custom printed bags...",
    ];

    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prevIndex) => (prevIndex + 1) % items.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    if (hidden) return null;

    return (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
            <motion.span className="text-sm text-zinc-400">
                <AnimatePresence mode="wait">
                    <span className="flex gap-1">
                        Search
                        <motion.span
                            key={active}
                            initial={{ y: 10, opacity: 0, filter: "blur(6px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="block whitespace-nowrap h-full"
                        >
                            "{items[active]}"
                        </motion.span>
                    </span>
                </AnimatePresence>
            </motion.span>
        </div>
    );
}