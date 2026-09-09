import { Link } from "react-router-dom";

import BookIcon from "../assets/book.svg";
import OnevvordHero from "../assets/oneword_hero.svg";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#f3f3f3] font-sans text-gray-800 relative">
      {/* Hovedindhold */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="relative bg-[#ebe8e8] pt-10 pb-20 px-12 flex justify-between items-start">
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold tracking-wider text-[#ea7c7c] uppercase">
              Velkommen to OneWord
            </h1>
            <button className="bg-[#e77979] hover:bg-[#d66868] text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition transform active:scale-95 flex items-center gap-2">
              <span>Opret Notesbog</span>
            </button>
          </div>

          <div className="hidden md:block">
            <img src={OnevvordHero} alt="OnevvordHero" className="w100 h-40" />
          </div>
        </header>

        <section className="flex-1 bg-[#f9f9f9] -mt-8 rounded-t-[2.5rem] p-10 shadow-lg border-t border-white">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Mine Notebøger:
          </h2>

          <div className="space-y-3  w-full">
            <Link
              title="Notebog 1"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-4 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition w-full flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xs text-gray-500 font-mono">
                  <img
                    src={BookIcon}
                    alt="Brugerprofil"
                    className="w-5 h-5 object-contain"
                  />
                </span>
                <span className="font-semibold text-gray-800 text-sm"></span>
              </div>
              <span className="text-xs text-gray-400 font-normal">
                sidst ændrede:
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
