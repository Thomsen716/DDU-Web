import { useContext } from "react";
import { RouteContext } from "./Router";
import Hjem from "./components/Hjem";
import Note from "./components/Note";
import Login from "./components/Login";

function App() {
  const { page, setPage } = useContext(RouteContext);

  return (
    <>
      {page == "hjem" && <Hjem />}
      {page == "login" && <Login />}
      {page == "note" && <Note />}
    </>
  );
}

export default App;
