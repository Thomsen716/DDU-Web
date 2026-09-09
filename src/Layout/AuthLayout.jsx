import { Outlet } from "react-router-dom";
import CopyrightFooter from "../components/CopyrightFooter";

export default function AuthLayout() {
  return (
    <div className="">
      <main className="">
        <Outlet />
        <CopyrightFooter />
      </main>
    </div>
  );
}
