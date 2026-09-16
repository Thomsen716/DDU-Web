export default function CreateNotebookModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-800">Opret notesbog</h2>
        <p className="mt-1 text-sm text-gray-500">
          Giv din notesbog et navn, og vælg en farve for at holde styr på dine
          noter
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="mt-5"
        >
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Navn
          </label>
          <input
            type="text"
            placeholder="Fx. Matematik, Dansk eller Projekt"
            autoFocus
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#E57A7A] focus:ring-1 focus:ring-[#E57A7A]"
          />

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Annuller
            </button>
            <button
              type="submit"
              className="rounded-lg bg-[#E57A7A] px-4 py-2 text-sm font-medium text-white hover:bg-[#d96d6d]"
            >
              Opret
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
