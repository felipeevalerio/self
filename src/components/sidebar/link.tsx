import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cva } from 'class-variance-authority'

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

interface SidebarLinkProps {
    href: string;
    children: ReactNode
} 

export function SidebarLink({ href, children}: SidebarLinkProps) {
    const pathname = usePathname()
    const isCurrentLink = pathname === href

    function getLinkVariant() {
        const variant = isCurrentLink ? 'active' : 'inactive'
        return linkVariants({intent: variant})
    }

    return (
        <li className={getLinkVariant()}>
            <Link className="flex items-center gap-2 w-full" href={href}>
                {children}
            </Link>
        </li>
    )
}