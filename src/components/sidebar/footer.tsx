import { CircleUserRound, LogOut } from "lucide-react";
import { SidebarActions } from "./actions";
import { SidebarAction } from "./action";

export function SidebarFooter() {
    return (
        <SidebarActions className="mt-auto">
            <SidebarAction>
                <CircleUserRound size={24} />
                Account
            </SidebarAction>
            <SidebarAction>
                <LogOut size={24} />
                Sign out
            </SidebarAction>
        </SidebarActions>
    )
}