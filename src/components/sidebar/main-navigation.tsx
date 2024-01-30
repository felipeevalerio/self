import { CircleDollarSign, Album, Droplet, Dumbbell } from "lucide-react";
import { Sidebar } from ".";

export function SidebarMainNavigation() {
    return (
        <nav className="mt-12">
            <Sidebar.Actions>
                <Sidebar.Action href="/finance">
                    <CircleDollarSign size={24} />
                    Finance
                </Sidebar.Action>
                <Sidebar.Action href="/gym-progress">
                    <Dumbbell size={24} />
                    Gym Progress
                </Sidebar.Action>
                <Sidebar.Action href="/water-intake">
                    <Droplet size={24} />
                    Water Intake
                </Sidebar.Action>
                <Sidebar.Action href="/tracking-calories">
                    <Album size={24} />
                    Tracking Calories
                </Sidebar.Action>
            </Sidebar.Actions>
        </nav>
    )
}