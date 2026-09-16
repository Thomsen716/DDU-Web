import { useState, useEffect } from "react";
// Importer useAuth hooket i stedet for direkte fra filen
import { useAuth } from "../Auth"; // Tilpas stien til din context-fil

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
    <div>
      <h2>Dine Notebooks</h2>
      {notebooks.length === 0 ? (
        <p>Ingen notebooks fundet.</p>
      ) : (
        <table>
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
        </table>
      )}
    </div>
  );
}
