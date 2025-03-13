// src/components/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router";
import { useApplicationContext } from "../../context/ApplicationContext";

interface NavItem {
    path: string;
    label: string;
    icon: string;
}

const Sidebar: React.FC = () => {
    const { user } = useApplicationContext();
    const userRole = localStorage.getItem("role") || user?.role;

    const navItems: Record<string, NavItem[]> = {
        student: [
            { path: "/timetable", label: "Timetable", icon: "📅" },
            { path: "/course-materials", label: "Materials", icon: "📚" },
            { path: "/events", label: "Events", icon: "🎉" },
        ],
        lecturer: [
            { path: "/timetable", label: "Timetable", icon: "📅" },
            { path: "/update-course-materials", label: "Edit Materials", icon: "✍️" },
            { path: "/request-resources", label: "Request Items", icon: "📦" },
            { path: "/events", label: "Events", icon: "🎉" },
        ],
        admin: [
            { path: "/register-user", label: "Users", icon: "👥" },
            { path: "/manage-timetable", label: "Timetable", icon: "🗓️" },
            { path: "/resource-allocation", label: "Resources", icon: "⚙️" },
            { path: "/course-manage", label: "Courses", icon: "📖" },
        ],
    };

    const userNavItems = navItems[userRole] || [];

    return (
        <div className="w-64 h-full bg-gray-100 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            {/* Logo area */}
            <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-bold capitalize">{userRole} Dashboard</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 overflow-y-auto">
                <ul className="space-y-2">
                    {userNavItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center p-3 rounded-lg ${isActive
                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`
                                }
                            >
                                <span className="mr-3">{item.icon}</span>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* User profile section */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                        <span>U</span>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium">User Name</p>
                        <button
                            className="text-xs text-red-500 hover:text-red-700"
                            onClick={() => {
                                localStorage.removeItem("token");
                                localStorage.removeItem("role");
                                window.location.href = "/auth/login";
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
