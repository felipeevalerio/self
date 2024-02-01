import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SidebarActionsProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function SidebarActions({
  className,
  children,
  ...props
}: SidebarActionsProps) {
  return (
    <div className={twMerge('flex flex-col gap-3', className)} {...props}>
      {children}
    </div>
  )
}
