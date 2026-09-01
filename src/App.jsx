import { useContext } from "react";
import { RouteContext } from "./Router";
import Hjem from "./pages/Hjem";
import Note from "./pages/Note";
import Login from "./pages/Login";

function App() {
  const { page, setPage } = useContext(RouteContext);

  return (
    <>
      {page == "login" && <Login />}
      {page == "hjem" && <Hjem />}
      {page == "note" && <Note />}
    </>
  );
}

export default App;
