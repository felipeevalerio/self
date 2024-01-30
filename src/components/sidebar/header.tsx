import { Logo } from "../logo";
import { ChevronsLeft } from "lucide-react";

interface SidebarHeaderProps {
    handleSidebarVisibility: (isOpen: boolean) => void
}

export function SidebarHeader({ handleSidebarVisibility }: SidebarHeaderProps) {
    function handleCloseSidebar() {
        handleSidebarVisibility(false);
    }

    return (
        <div className="flex justify-between items-center">
            <Logo />
            <button onClick={handleCloseSidebar}>
                <ChevronsLeft />
            </button>
        </div>
    )
}