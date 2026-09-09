import { Outlet } from "react-router-dom";
import CopyrightFooter from "../components/CopyrightFooter";
import AuthNavBar from "../components/AuthNavBar";

export default function AuthLayout() {
  return (
    <div className="relative h-screen overflow-hidden">
      <AuthNavBar />

      <main className="h-full">
        <Outlet />
      </main>

      <footer className="fixed inset-x-0 bottom-0 z-50 text-center">
        <CopyrightFooter />
      </footer>
    </div>
  );
}
