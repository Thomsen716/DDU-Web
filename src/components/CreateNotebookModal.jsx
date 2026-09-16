import { useState } from "react";

export default function CreateNotebookModal({ isOpen, onClose, onCreate }) {
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#E57A7A");

  if (!isOpen) return null;

  const colors = [
    "#E57A7A",
    "#F28B82",
    "#F6B26B",
    "#FFD966",
    "#76C7B0",
    "#7DB9E8",
    "#8E8FE8",
    "#B084CC",
  ];

  const handleCreate = () => {
    if (!name.trim()) return;

    onCreate({
      name: name.trim(),
      color: selectedColor,
    });

    setName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Baggrund */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[520px] max-w-[90vw] rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-7">
          <div className="flex gap-4">
            {/* Notebook ikon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E57A7A]/10">
              <svg
                className="h-7 w-7 text-[#E57A7A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="6" y="3" width="12" height="18" rx="2" />
                <path d="M9 7h6M9 11h6M9 15h4" />
              </svg>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Opret notesbog
              </h2>

              <p className="mt-1 max-w-[330px] text-sm leading-5 text-slate-500">
                Giv din notesbog et navn, og vælg en farve for at holde styr på
                dine noter.
              </p>
            </div>
          </div>

          {/* Luk */}
          <button
            onClick={onClose}
            className="text-2xl text-slate-400 transition hover:text-slate-700"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* Navn */}
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Navn
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Fx. Matematik, Dansk eller Projekt"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#E57A7A] focus:ring-2 focus:ring-[#E57A7A]/20"
            autoFocus
          />

          {/* Farve */}
          <div className="mt-6">
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Farve
            </label>

            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-8 w-8 rounded-full transition ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2"
                      : "hover:scale-110"
                  }`}
                  style={{
                    backgroundColor: color,
                    "--tw-ring-color": color,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-slate-100 px-8 py-5">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Annuller
          </button>

          <button
            onClick={handleCreate}
            disabled={!name.trim()}
            className="rounded-xl bg-[#E57A7A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d96d6d] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Opret
          </button>
        </div>
      </div>
    </div>
  );
}
