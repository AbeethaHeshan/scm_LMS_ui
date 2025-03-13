// src/components/Sidebar.tsx
import React, { useEffect, useState } from 'react';
import { useApplicationContext } from '../../context/ApplicationContext';
import { CalendarOutlined, BookOutlined, PartitionOutlined, InboxOutlined, UsergroupAddOutlined, SettingOutlined, ReadOutlined, DashboardOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router';

interface NavItem {
    path: string;
    label: string;
    icon: React.ReactNode;
    subPaths?: { path: string; label: string }[];
}

const Sidebar: React.FC = () => {
    const { user } = useApplicationContext();
    const navigate = useNavigate();
    const location = useLocation();

    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>(['/dashboard']);

    const storedUser = localStorage.getItem('user');
    const userRole = storedUser ? JSON.parse(storedUser).role : user?.role;

    const navItems: Record<string, NavItem[]> = {
        student: [
            {
                path: '/dashboard',
                label: 'Dashboard',
                icon: <DashboardOutlined />
            },
            {
                path: '/dashboard/timetable',
                label: 'Timetable',
                icon: <CalendarOutlined />,
                subPaths: [{ path: '/view', label: 'View' }]
            },
            {
                path: '/dashboard/course-materials',
                label: 'Materials',
                icon: <BookOutlined />,
                subPaths: [{ path: '/view', label: 'View' }]
            },
            {
                path: '/dashboard/events',
                label: 'Events',
                icon: <PartitionOutlined />,
                subPaths: [{ path: '/view', label: 'View' }]
            },
        ],
        lecturer: [
            {
                path: '/dashboard',
                label: 'Dashboard',
                icon: <DashboardOutlined />
            },
            {
                path: '/dashboard/timetable',
                label: 'Timetable',
                icon: <CalendarOutlined />,
                subPaths: [{ path: '/view', label: 'View' }]
            },
            {
                path: '/dashboard/course-materials',
                label: 'Materials',
                icon: <BookOutlined />,
                subPaths: [{ path: '/view', label: 'View' }]
            },
            {
                path: '/dashboard/resources',
                label: 'Resources',
                icon: <InboxOutlined />,
                subPaths: [{ path: '/request', label: 'Request' }]
            },
            {
                path: '/dashboard/events',
                label: 'Events',
                icon: <PartitionOutlined />,
                subPaths: [{ path: '/view', label: 'View' }]
            },
        ],
        admin: [
            {
                path: '/dashboard',
                label: 'Dashboard',
                icon: <DashboardOutlined />
            },
            {
                path: '/dashboard/users',
                label: 'Users',
                icon: <UsergroupAddOutlined />,
                subPaths: [{ path: '/manage', label: 'Manage' }]
            },
            {
                path: '/dashboard/timetable',
                label: 'Timetable',
                icon: <CalendarOutlined />,
                subPaths: [{ path: '/manage', label: 'Manage' }]
            },
            {
                path: '/dashboard/resource',
                label: 'Resources',
                icon: <SettingOutlined />,
                subPaths: [
                    { path: '/dashboard', label: 'Dashboard' },
                    { path: '/requested-resources', label: 'Requested Resources' }
                ]
            },
            {
                path: '/dashboard/courses',
                label: 'Courses',
                icon: <ReadOutlined />,
                subPaths: [
                    { path: '/dashboard', label: 'Dashboard' },
                    { path: '/manage', label: 'Manage' }
                ]
            },
        ],
    };

    const roleNavItems = navItems[userRole as keyof typeof navItems] || [];

    const getMenuItems = () => {
        return roleNavItems.map((item) => {
            const children = item.subPaths?.map((subPath) => ({
                key: `${item.path}${subPath.path}`,
                label: subPath.label,
                onClick: () => navigate(`${item.path}${subPath.path}`),
            }));

            return {
                key: item.path,
                icon: item.icon,
                label: item.label,
                children: children,
                onClick: !item.subPaths ? () => navigate(item.path) : undefined,
            };
        });
    };

    // Find the currently selected menu item based on the URL
    const findSelectedKeys = () => {
        const currentPath = location.pathname;
        const openKeys: string[] = [];
        const selectedKeys: string[] = [];

        // If it's exactly dashboard path, select dashboard
        if (currentPath === '/dashboard') {
            selectedKeys.push('/dashboard');
            return { openKeys, selectedKeys };
        }

        // Otherwise look for matching paths
        roleNavItems.forEach(item => {
            if (currentPath.startsWith(item.path)) {
                openKeys.push(item.path);

                // Handle parent path exact match
                if (currentPath === item.path) {
                    selectedKeys.push(item.path);
                }

                // Handle subpaths
                item.subPaths?.forEach(subPath => {
                    if (currentPath === `${item.path}${subPath.path}`) {
                        selectedKeys.push(`${item.path}${subPath.path}`);
                    }
                });
            }
        });

        // If no match found, default to dashboard
        if (selectedKeys.length === 0 && currentPath.includes('/dashboard')) {
            selectedKeys.push('/dashboard');
        }

        return { openKeys, selectedKeys };
    };

    const { openKeys, selectedKeys } = findSelectedKeys();

    // Update defaultSelectedKeys when location changes
    useEffect(() => {
        setDefaultSelectedKeys(selectedKeys);
    }, [location.pathname]);

    return (
        <Sider
            width={200}
            theme="light"
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
        >
            <Menu
                mode="inline"
                defaultOpenKeys={openKeys}
                defaultSelectedKeys={defaultSelectedKeys}
                selectedKeys={selectedKeys}
                style={{ height: 'calc(100% - 64px)', borderRight: 0 }}
                items={getMenuItems()}
            />
        </Sider>
    );
};

export default Sidebar;