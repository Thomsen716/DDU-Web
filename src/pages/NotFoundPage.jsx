import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex-col justify-center items-center h-screen w-screen flex bg-[#f3f3f3]">
      <h1 className="font-bold text-2xl p-10"> 404 - Siden ikke fundet ❌</h1>
      <Link to="/">
        <button className="bg-[#e8e8e8] hover:bg-[#d6d6d6] text-gray-800 font-semibold py-1.5 px-3 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition">
          Gå tilbage
        </button>
      </Link>
    </div>
  );
}
