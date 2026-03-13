'use client';
import { MenuItems } from '@/constant/menu';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

export default function DesktopHeader() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className='sticky top-0 z-50 w-full bg-primary-100 max-md:hidden lg:px-12 md:px-10 px-8 h-12'>
      <div className='w-full max-w-7xl mx-auto flex items-center h-full'>
        {
          MenuItems.map((item, idx) => (
            <div
              key={idx}
              className='h-full relative px-5 group flex items-center text-sm font-medium text-primary-500'
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
            >

              {item.path ? (
                <Link
                  href={item.path}
                  className='h-full flex items-center'
                >
                  {item.name}
                </Link>
              ) : (
                <span className="cursor-pointer flex items-center gap-2.5 h-full">
                  {item.name}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${active === idx ? "rotate-180" : ""}`}
                  />
                </span>
              )}


              <AnimatePresence>
                {active === idx && item.subMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 bg-white shadow-md w-56 rounded-md overflow-hidden"
                  >
                    {item.subMenu.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.path || "#"}
                        className="px-4 py-2 flex items-center gap-1.5 hover:text-primary-500 transition-colors duration-300 text-zinc-600 text-sm group/sub hover:bg-primary-50"
                      >
                        <ChevronRight
                          size={10}
                          className='group-hover/sub:translate-x-0.5 transition-transform duration-300'
                        />
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode='popLayout'>
                {active === idx && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-x-0 bottom-0 bg-primary-600 h-0.5"
                    initial={{
                      opacity: 0,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{
                      type: "tween",
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.5,
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))
        }
      </div>
    </div>
  )
}
