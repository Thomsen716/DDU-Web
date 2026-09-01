import React, { useState } from "react";

// Seperat modal-komponent der modtager tilstand og callbacks som props
export default function CreateNotebookModal({ isOpen, onClose, onCreate }) {
  const [newTitle, setNewTitle] = useState("");

  // Hvis modalen ikke skal vises, returneres ingenting (null)
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    // Sender den nye titel tilbage til forældre-komponentet (Dashboard)
    onCreate(newTitle.trim());
    setNewTitle("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl border border-gray-100">
        {/* Modal Overskrift og Luk-knap */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold text-gray-800">Opret ny notesbog</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition font-bold text-lg p-1"
          >
            ✕
          </button>
        </div>

        {/* Input Formular */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Titel på notesbog
            </label>
            <input
              type="text"
              placeholder="f.eks. Biologi, Historie..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e77979] focus:border-transparent transition"
              autoFocus
            />
          </div>

          {/* Knapper */}
          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition text-sm"
            >
              Annuller
            </button>
            <button
              type="submit"
              disabled={!newTitle.trim()}
              className="px-5 py-2.5 rounded-xl bg-[#e77979] hover:bg-[#d66868] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold shadow-md transition text-sm"
            >
              Opret
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
