import { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentProps<"div"> & {
    children: ReactNode
    className?: string
}
export default function Wrapper({ children, className, ...rest }: Props) {
    return (
        <div
            className={cn("w-full max-w-7xl relative mx-auto lg:py-18 md:py-16 sm:py-12 py-8 flex flex-col lg:gap-14 md:gap-12 gap-10", className)}
            {...rest}
        >
            {children}
        </div>
    )
}
