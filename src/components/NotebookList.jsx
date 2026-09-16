import { useState, useEffect } from "react";
// Importer useAuth hooket i stedet for direkte fra filen
import { useAuth } from "../Auth"; // Tilpas stien til din context-fil

/*import BookIcon from "../assets/book.svg";*/

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
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e77979] bg-[#e77979]/20 text-[#e77979]">
                  <svg
                    viewBox="0 -960 960 960"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6q47 0 91.5 10.5T440-278Zm40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q74 0 126 17t112 52q11 6 16.5 14t5.5 21v418q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-481q15 5 29.5 11t28.5 14q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Zm140-240v-440l120-40v440l-120 40Zm-340-99Z" />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold text-gray-800">
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
