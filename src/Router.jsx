import { createContext, useState } from "react";
const RouteContext = createContext(null);

export default function Router({ children }) {
  const currentPage = window.location.pathname.split("/")[1];
  console.log(currentPage);
  const [page, setPage] = useState(currentPage || "login");

  const setPageURL = (value) => {
    setPage(value);
    window.location.pathname = value;
  };

  return (
    <RouteContext.Provider value={{ page, setPage: setPageURL }}>
      {children}
    </RouteContext.Provider>
  );
}

export { RouteContext };
