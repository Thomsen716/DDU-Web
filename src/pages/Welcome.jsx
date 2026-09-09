import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#f3f3f3] ">
      <h1 className="font-bold text-4xl p-10">Velkommen til Onevvord</h1>
      <div className="flex gap-3">
        <Link
          className="w-32 inline-flex items-center justify-center bg-[#e8e8e8] hover:bg-[#d6d6d6] text-gray-800 font-semibold py-1.5 px-3 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition"
          to="signup"
        >
          Opret Konto
        </Link>

        <Link
          className="w-32 inline-flex items-center justify-center bg-[#e8e8e8] hover:bg-[#d6d6d6] text-gray-800 font-semibold py-1.5 px-3 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition"
          to="login"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
