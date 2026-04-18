import { cn } from "@/lib/utils"
import { ComponentProps, ReactNode } from "react"

type Props = ComponentProps<"section"> & {
    children: ReactNode
    className?: string
}
export default function Section({ children, className, ...rest }: Props) {
    return (
        <section
            className={cn("w-full lg:px-12 md:px-10 px-4", className)}
            {...rest}
        >
            {children}
        </section>
    )
}

