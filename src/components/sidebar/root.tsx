import { ComponentProps } from "react";

type SidebarRootProps = ComponentProps<'aside'>

export function SidebarRoot({ ...props }: SidebarRootProps) {
    return (
        <aside className="pt-7 pl-5 pr-4 pb-6 flex flex-col max-w-80 bg-gray-700 min-h-screen" {...props}/>
    )
}