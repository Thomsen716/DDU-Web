import { Outlet } from "react-router-dom";
import DashboardTopBar from "../components/DashboardTopBar";
import DashboardSidebar from "../components/DashboardSideBar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardTopBar />
      <DashboardSidebar />

      <main className="ml-22 pt-16">
        <Outlet />
      </main>
    </div>
  );
}
