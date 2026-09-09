import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function AuthNavBar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className=" flex max-w items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-slate-900">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-2 inline-block" />
          OneWord
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/" className="transition hover:text-slate-900">
            Hjem
          </Link>
          <Link to="/about" className="transition hover:text-slate-900">
            Om os
          </Link>
          <Link to="/contact" className="transition hover:text-slate-900">
            Kontakt os
          </Link>
        </div>
      </div>
    </nav>
  );
}
