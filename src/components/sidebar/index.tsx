'use client'

import { useState } from "react";
import { SidebarHeader } from "./header";
import { SidebarMainNavigation } from "./main-navigation";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)

    if (!isOpen) return null

    return (
        <aside className="pt-7 pl-5 pr-4 pb-6 flex flex-col max-w-80 bg-gray-700 min-h-screen">
            <SidebarHeader  handleSidebarVisibility={setIsOpen}/>
            <SidebarMainNavigation />
        </aside>
    )
}