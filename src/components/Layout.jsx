import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <Sidebar></Sidebar>
      {/* Dynamisk indhold (Her bliver Home, About osv. vist) */}

      <Outlet />
    </>
  );
}
