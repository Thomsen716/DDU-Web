import { useState, useEffect } from "react";
// Importer useAuth hooket i stedet for direkte fra filen
import { useAuth } from "../Auth"; // Tilpas stien til din context-fil

import BookIcon from "../assets/book.svg";

export default function NotebookList() {
  const [notebooks, setNotebooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hent user og listNotebooks direkte fra AuthContext
  const { user, listNotebooks } = useAuth();

  useEffect(() => {
    const fetchNotebooks = async () => {
      if (!user?.id) return;

      setLoading(true);
      const res = await listNotebooks();

      if (res?.data) {
        setNotebooks(res.data);
        console.log(res?.data);
      }
      setLoading(false);
    };

    fetchNotebooks();
  }, [user?.id, listNotebooks]);

  if (loading) return <p>Henter notebooks...</p>;

  return (
    <div className="flex-auto bg-[#f9f9f9] -mt-8 rounded-t-[2.5rem] p-10 shadow-lg border-t border-white">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Mine Notebøger</h2>
      {notebooks.length === 0 ? (
        <p>Opret notesbog for at komme igang</p>
      ) : (
        <div className="space-y-3">
          {notebooks.map((notebook) => (
            <button
              key={notebook.id}
              className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3 text-left shadow-sm transition hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <img
                  src={BookIcon}
                  alt="Book icon"
                  className="h-5 w-5 object-contain"
                />

                <div>
                  <div className=" font-semibold text-gray-800">
                    {notebook.title}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  Sidst ændret:{" "}
                  {new Date(notebook.updated_at).toLocaleDateString("da-DK")}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/*<table>
          <thead>
            <tr>
              <th>Titel</th>
              <th>Senest opdateret</th>
            </tr>
          </thead>
          <tbody>
            {notebooks.map((notebook) => (
              <tr key={notebook.id}>
                <td>{notebook.title}</td>
                <td>
                  {new Date(notebook.updated_at).toLocaleDateString("da-DK")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>*/
