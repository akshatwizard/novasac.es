import { cn } from '@/lib/utils';
import { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<"h1"> & {
    children: ReactNode
    className?: string
}
type Props1 = ComponentProps<"h2"> & {
    children: ReactNode
    className?: string
}
type Props2 = ComponentProps<"span"> & {
    children: ReactNode
    className?: string
}
type Props3 = ComponentProps<"p"> & {
    children: ReactNode
    className?: string
}

export function PageHeading({ children, className, ...rest }: Props) {
    return (
        <h1
            className={cn("lg:text-5xl md:text-4xl text-3xl leading-tight antialiased text-center", className)}
            {...rest}
        >
            {children}
        </h1>
    )
}

export function Heading({ children, className, ...rest }: Props1) {
    return (
        <h2
            className={cn("font-semibold lg:text-4xl text-3xl leading-tight antialiased text-zinc-900", className)}
            {...rest}
        >
            {children}
        </h2>
    )
}

export function SubHeading({ children, className, ...rest }: Props2) {
    return (
        <span
            className={cn("inline-block text-sm leading-tight antialiased text-zinc-700", className)}
            {...rest}
        >
            {children}
        </span>
    )
}

export function Content({ children, className, ...rest }: Props3) {
    return (
        <p
            className={cn("inline-block text-sm antialiased leading-tight", className)}
            {...rest}
        >
            {children}
        </p>
    )
}
