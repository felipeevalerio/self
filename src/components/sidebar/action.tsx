import { cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react"

const linkVariants = cva('py-1.5 px-3 rounded-md flex items-center gap-2', {
    variants: {
        intent: {
            active: ['bg-yellow', 'text-gray-700', 'pointer-events-none'],
            inactive: ['bg-gray-700', 'text-white-500', 'hover:bg-gray-500', 'transition-colors']
        }
    },
    defaultVariants: {
        intent: 'inactive'
    }
})

interface SidebarActionProps extends ComponentProps<'button'> {
    href?: string;
    children: ReactNode;
}

export function SidebarAction({href, children, ...props}: SidebarActionProps) {
    const pathname = usePathname()
    const isCurrentLink = pathname === href

    function getLinkVariant() {
        const variant = isCurrentLink ? 'active' : 'inactive'
        return linkVariants({intent: variant})
    }
    
    if (href) {
        return <Link href={href} className={getLinkVariant()}>{children}</Link>
    }

    return (
        <button className={linkVariants()} {...props}>{children}</button>
    )
}