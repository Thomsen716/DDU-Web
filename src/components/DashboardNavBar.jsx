import DashboardTopBar from "./DashboardTopBar";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Topbar placeres øverst */}
      <DashboardTopBar />

      {/* Main container der indeholder Sidebar og Sideindhold */}
      <div className="flex">
        <DashboardSidebar />

        {/* ml-64 skubber selve siden til højre for sidebaren */}
        <main>{children}</main>
      </div>
    </div>
  );
}
