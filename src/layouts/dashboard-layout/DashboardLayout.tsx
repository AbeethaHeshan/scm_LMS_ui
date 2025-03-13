import React from 'react';
import { Outlet } from 'react-router';
import SideBar from '../components/SideBar';

type Props = {};

export const DashboardLayout = (props: Props) => {
  return (
    <div className="" style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Sidebar */}
      <SideBar />

      {/* Main content area */}
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};
