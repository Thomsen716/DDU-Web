import { useContext } from "react";
import { RouteContext } from "./Router";
import Hjem from "./pages/Hjem";
import Note from "./pages/Note";
import Login from "./pages/Login";
import Database from "./components/Database";
import SignUp from "./pages/SignUp";

function App() {
  const { page, setPage } = useContext(RouteContext);

  return (
    <>
      {page == "login" && <Login />}
      {page == "hjem" && <Hjem />}
      {page == "note" && <Note />}
      {page == "database" && <Database />}
      {page == "SignUp" && <SignUp />}
    </>
  );
}

export default App;
