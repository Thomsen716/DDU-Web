import { useContext } from "react";
import { RouteContext } from "../Router";

export default function Button({
  pageToSet,
  children,
  className = "",
  ...props
}) {
  const { setPage } = useContext(RouteContext);

  return (
    <button className={className} onClick={() => setPage(pageToSet)} {...props}>
      {children}
    </button>
  );
}
