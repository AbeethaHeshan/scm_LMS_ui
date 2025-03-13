// src/routes/main.route.tsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { DashboardLayout } from '../layouts/dashboard-layout/DashboardLayout';
import Test from '../pages/Test.';


export const MainRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

            <Route
                element={<DashboardLayout />}
            >
                <Route path='/' element={<Test/>}/>
                {/* <Route path="/*" element={<DashboardRoutes />} />
                <Route path="settings/*" element={<SettingsRoutes />} />
                <Route path="profile/*" element={<ProfileRoutes />} />
                <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
            </Route>

            <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
    );
};