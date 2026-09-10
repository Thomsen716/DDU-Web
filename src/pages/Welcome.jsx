import { Link } from "react-router-dom";
import welcomeBagground from "../assets/welcome-bagground.png";
import frontImage from "../assets/front-image.png";

export default function Welcome() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <img
        src={welcomeBagground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <img
        src={frontImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative text-center pt-60">
        <h1 className="text-5xl font-bold">Velkommen til OneWord</h1>

        <h2 className="text-2xl pb-10 pt-2">
          Skriv, organiser og skab mere - samlet ét sted.
        </h2>

        <div className="flex justify-center gap-5">
          <Link
            className="w-46 rounded-3xl bg-[#EA9393] text-white py-3 font-semibold shadow-sm"
            to="signup"
          >
            Opret Konto
          </Link>

          <Link
            className="w-46 rounded-3xl bg-white text-[#EA9393] border-[#EA9393] border-2 py-3 font-semibold shadow-sm"
            to="login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
