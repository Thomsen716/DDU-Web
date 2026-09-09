import { Link } from "react-router-dom";
import userLogo from "../assets/user-logo.svg";
import settingsLogo from "../assets/settings-logo.svg";

export default function DashboardSidebar() {
  return (
    <aside className="fixed bottom-0 left-0 top-5 z-40 flex w-auto flex-col border-r border-slate-200 bg-white p-4">
      <nav className="mt-auto flex flex-col gap-1">
        <Link
          to="/profile"
          className="rounded-lg px-4 py-2.5 transition hover:bg-gray-100 hover:text-slate-900 text-sm font-medium text-slate-600"
        >
          <img
            src={userLogo}
            alt="profile"
            className="h-6 w-auto inline-block"
          />
        </Link>
        <Link
          to="/settings"
          className="rounded-lg px-4 py-2.5 transition hover:bg-gray-100 hover:text-slate-900 text-sm font-medium text-slate-600"
        >
          <img
            src={settingsLogo}
            alt="settings"
            className="h-6 w-auto inline-block"
          />
        </Link>
      </nav>
    </aside>
  );
}
