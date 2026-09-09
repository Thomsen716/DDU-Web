import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hjem from "./pages/Hjem";
/*
import Note from "./pages/Note";
import Login from "./pages/Login";
import Database from "./components/Database";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
*/
function App() {
  //const { page, setPage } = useContext(RouteContext);

  return (
    <Router>
      <Routes>
        {/* Layout-ruten har ingen 'path', men omslutter de andre ruter */}
        <Route element={<Layout />}>
          <Route path="/" element={<Hjem />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
