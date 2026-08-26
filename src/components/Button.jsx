import { useContext } from "react";
import { RouteContext } from "../Router";

export default function Button({ pageToSet, children }) {
  const { setPage } = useContext(RouteContext);

  return (
    <>
      <button className="bg-red-500 w-10" onClick={() => setPage(pageToSet)}>
        {children}
      </button>
    </>
  );
}
