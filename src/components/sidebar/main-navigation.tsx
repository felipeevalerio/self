import { CircleDollarSign, Album, Droplet, Dumbbell } from "lucide-react";
import { SidebarLink } from "./link";

export function SidebarMainNavigation() {
    return (
        <nav className="mt-12">
            <ul className="flex flex-col gap-3">
                <SidebarLink href="/finance">
                    <CircleDollarSign size={24} />
                    Finance
                </SidebarLink>
                <SidebarLink href="/gym-progress">
                    <Dumbbell size={24} />
                    Gym Progress
                </SidebarLink>
                <SidebarLink href="/water-intake">
                    <Droplet size={24} />
                    Water Intake
                </SidebarLink>
                <SidebarLink href="/tracking-calories">
                    <Album size={24} />
                    Tracking Calories
                </SidebarLink>
            </ul>
        </nav>
    )
}