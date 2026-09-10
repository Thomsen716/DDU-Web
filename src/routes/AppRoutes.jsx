import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome";
import Dashboard from "../pages/Dashboard";
import NotFoundPage from "../pages/NotFoundPage";
import Signup from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";

import AuthLayout from "../Layout/AuthLayout";
// import WelcomeLayout  from "../Layout/Welcomelayout";
import DashboardLayout from "../Layout/DashboardLayout";

import AuthGuard from "../AuthGuard";
import { AuthProvider } from "../Auth";

function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              }
            />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
