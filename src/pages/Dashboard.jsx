import { Link } from "react-router-dom";
import NotebookList from "./NotebookList";

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

        <NotebookList></NotebookList>
      </main>
    </div>
  );
}
