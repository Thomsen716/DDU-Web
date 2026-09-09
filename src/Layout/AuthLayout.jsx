import { Outlet } from "react-router-dom";
import CopyrightFooter from "../components/CopyrightFooter";
import AuthNavBar from "../components/AuthNavBar";

export default function AuthLayout() {
  return (
    <div className="">
      <AuthNavBar />
      <main className="">
        <Outlet />
      </main>

      <div className="text-center">
        <CopyrightFooter />
      </div>
    </div>
  );
}
