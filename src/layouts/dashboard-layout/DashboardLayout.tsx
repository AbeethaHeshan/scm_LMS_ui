import { Outlet } from 'react-router';
import SideBar from '../components/SideBar';
import { Layout, Menu, Avatar, Badge, Dropdown, Space } from 'antd';
import { BellOutlined, SettingOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import MainBar from '../components/MainBar';


export const DashboardLayout = () => {

  const { Header, Sider, Content } = Layout;

  const userMenu = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      danger: true,
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: 0, padding: 0, minHeight: '100vh' }}>
      <Layout>
        <SideBar />
      </Layout>

      <div style={{ width: '100%' }}>
        <MainBar/>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          <Outlet />
        </Content>
      </div>
    </div>
  );
};
