import React, { useState } from "react";
// Importering af de to nye komponenter
import Sidebar from "../components/Sidebar";
import CreateNotebookModal from "../components/CreateNotebookModal";
import BookIcon from "../assets/book.svg";

export default function Hjem() {
  // Tilstand for notebøger
  const [notebooks, setNotebooks] = useState([
    {
      id: 1,
      title: "Gymnasie",
      lastModified: "17-08-2026",
    },
  ]);

  // Tilstand for om modalen er åben
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funktion til at tilføje den nye notesbog til listen
  const handleAddNotebook = (title) => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    const newNotebook = {
      id: Date.now(),
      title: title,
      lastModified: formattedDate,
    };

    setNotebooks([...notebooks, newNotebook]);
  };

  return (
    <div className="flex h-screen bg-[#f3f3f3] font-sans text-gray-800 relative">
      {/* Sidebjælke importeret her */}
      <Sidebar />

      {/* Hovedindhold */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="relative bg-[#ebe8e8] pt-10 pb-20 px-12 flex justify-between items-start">
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold tracking-wider text-[#ea7c7c] uppercase">
              Velkommen to Onevvord
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#e77979] hover:bg-[#d66868] text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition transform active:scale-95 flex items-center gap-2"
            >
              <span>Opret Notesbog</span>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="w-36 h-24 bg-rose-100/60 rounded-3xl p-3 flex items-center justify-center border border-rose-200/50 shadow-inner">
              <div className="w-12 h-12 bg-[#e77979] rounded-2xl shadow-lg transform -rotate-6 flex items-center justify-center text-white font-bold">
                W
              </div>
            </div>
          </div>
        </header>

        <section className="flex-1 bg-[#f9f9f9] -mt-8 rounded-t-[2.5rem] p-10 shadow-lg border-t border-white">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Mine Notebøger:
          </h2>

          <div className="space-y-3 max-w-5xl">
            {notebooks.map((notebook) => (
              <div
                key={notebook.id}
                className="bg-[#e2e2e2]/60 hover:bg-[#dcdcdc] transition p-3.5 px-5 rounded-2xl flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500 font-mono">
                    <img
                      src={BookIcon}
                      alt="Brugerprofil"
                      className="w-5 h-5 object-contain"
                    />
                  </span>
                  <span className="font-semibold text-gray-800 text-sm">
                    {notebook.title}
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-normal">
                  sidst ændrede: {notebook.lastModified}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal-komponent importeret og styres via props */}
      <CreateNotebookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleAddNotebook}
      />
    </div>
  );
}
