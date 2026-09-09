import { Link } from "react-router-dom";
import welcomeBagground from "../../assets/welcome-bagground.png";
import wordOnenote from "../../assets/word-onenote.png";

export default function Login() {
  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans">
      <img
        src={welcomeBagground}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />
      <img
        src={wordOnenote}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 w-full max-w-95 rounded-2xl border border-[#100c08]/10 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#2f2f2f]">
          Login
        </h1>

        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-[#4a4a4a]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full box-border rounded-xl border border-[#100c08]/20 bg-[#fffdfd] px-3.5 py-3 text-[15px] text-[#2f2f2f] outline-none transition duration-200 placeholder:text-[#a4a4a4] focus:border-[#D85F6F] focus:shadow-[0_0_0_3px_rgba(229,122,122,0.12)]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-[#4a4a4a]"
            >
              Adgangskode
            </label>
            <input
              id="password"
              type="password"
              placeholder="Skriv din adgangskode"
              className="w-full box-border rounded-xl border border-[#100c08]/20 bg-[#fffdfd] px-3.5 py-3 text-[15px] text-[#2f2f2f] outline-none transition duration-200 placeholder:text-[#a4a4a4] focus:border-[#D85F6F] focus:shadow-[0_0_0_3px_rgba(229,122,122,0.12)]"
            />
          </div>

          <Link
            to="/dashboard"
            type="submit"
            className="bg-[#EA9393] hover:bg-[#e45f5f] text-white font-semibold py-3.5 px-3 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition text-center"
          >
            Login
          </Link>
        </form>

        <p className="mt-4 text-center text-sm text-[#6b6b6b]">
          Har du ikke en konto?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#100c08] no-underline hover:underline"
          >
            Opret Konto
          </Link>
        </p>
      </div>
    </div>
  );
}
