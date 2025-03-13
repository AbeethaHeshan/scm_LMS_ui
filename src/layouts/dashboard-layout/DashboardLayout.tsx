import React from 'react';
import { Outlet } from 'react-router';
import SideBar from '../components/SideBar';
import { Layout } from 'antd';

type Props = {};

export const DashboardLayout = (props: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' ,margin:0 ,padding:0,minHeight:'100vh'}}>
      {/* Sidebar */}
      <Layout>
        <SideBar />
      </Layout>

      {/* Main content area */}
      <div style={{ width: '100%',padding:15 }}>
        <Outlet />
      </div>
    </div>
  );
};
