import { Outlet } from "react-router-dom";
import CopyrightFooter from "../components/CopyrightFooter";
import NavBar from "../components/NavBar";

export default function AuthLayout() {
  return (
    <div className="">
      <NavBar />
      <main className="">
        <Outlet />
      </main>

      <div className="text-center">
        <CopyrightFooter />
      </div>
    </div>
  );
}
