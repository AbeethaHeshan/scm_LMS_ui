import { Outlet } from 'react-router';
import SideBar from '../components/SideBar';
import { Layout, Menu, Avatar, Badge, Dropdown, Space } from 'antd';
import { BellOutlined, SettingOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';


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
        <Header style={{ background: '#fff', padding: '0 15px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)', height: '55px' }}>
          <Space size={16}>
            <Badge count={5} dot>
              <BellOutlined style={{ fontSize: 20 }} />
            </Badge>

            <Dropdown
              menu={{
                items: userMenu.map(item => ({
                  ...item,
                  icon: React.cloneElement(item.icon, { style: { fontSize: '14px' } }),
                  style: { padding: '8px 16px', fontSize: '14px' }
                }))
              }}
              placement="bottomRight"
              dropdownRender={(menu) => (
                <div style={{ minWidth: '180px' }}>
                  {React.cloneElement(menu, {
                    style: { padding: '10px 0' },
                  })}
                </div>
              )}
            >
              <Avatar style={{ cursor: 'pointer', backgroundColor: '#1890ff' }} icon={<UserOutlined />} />
            </Dropdown>
          </Space>
        </Header>

        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          <Outlet />
        </Content>
      </div>
    </div>
  );
};
