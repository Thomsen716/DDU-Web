import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-slate-900">
          Onevvord
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/" className="transition hover:text-slate-900">
            Home
          </Link>
          <Link to="/about" className="transition hover:text-slate-900">
            About
          </Link>
          <Link to="/contact" className="transition hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
