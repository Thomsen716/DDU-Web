import { useState } from "react";

import NotebookList from "../components/NotebookList";
import OnevvordHero from "../assets/oneword_hero.svg";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f3f3f3] font-sans text-gray-800 relative">
      {/* Hovedindhold */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="relative bg-[#ebe8e8] pt-10 pb-20 px-12 flex justify-between items-start">
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold tracking-wider text-[#ea7c7c] uppercase">
              Velkommen to OneWord
            </h1>

            <button
              onClick={() => {
                setIsOpen(true);
                console.log("setIsOpen(true) kaldt");
              }}
              className="bg-[#e77979] hover:bg-[#d66868] text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition transform active:scale-95 flex items-center gap-2"
            >
              <p>Opret Notesbog </p>
            </button>
          </div>

          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center ">
              <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <h2 className="text-xl font-semibold text-gray-800">
                  Opret notesbog
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Giv din notessbog et navn, og vælg en farve for at holde styr
                  på dine noter
                </p>
                <form /*onSubmit={}*/ className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    {" "}
                    Navn
                  </label>
                  <input
                    type="text"
                    placeholder="Fx. Matematik, Dansk eller Projekt"
                    autoFocus
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#E57A7A] focus:ring-1 focus:ring-[#E57A7A]"
                  />

                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        console.log("setIsOpen(false) kaldt");
                      }}
                      className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      Annuller
                    </button>
                    <button
                      type="sumbit"
                      className="rounded-lg bg-[#E57A7A] px-4 py-2 text-sm font-medium text-white hover:bg-[#d96d6d]"
                    >
                      Opret
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="hidden md:block">
            <img src={OnevvordHero} alt="OnevvordHero" className="w100 h-40" />
          </div>
        </header>

        <NotebookList></NotebookList>
      </main>
    </div>
  );
}
