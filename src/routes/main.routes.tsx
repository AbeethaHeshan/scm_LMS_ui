// src/routes/main.route.tsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { DashboardLayout } from '../layouts/dashboard-layout/DashboardLayout';
import Test from '../pages/Test.';
import { AuthRoutes } from '../features/auth/auth.routes';


export const MainRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Navigate to="/auth/login" replace />} />
            <Route path="auth/*" element={<AuthRoutes />} />

            <Route
                element={<DashboardLayout />}
            >
                <Route path='/' element={<Test />} />
            </Route>

            {/* <Route path="*" element={<Navigate to="/auth/login" replace />} /> */}
        </Routes>
    );
};