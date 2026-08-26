import { useState } from "react";

export default function Note() {
  const { visSidebar, setVisSidebar } = useState(false);

  return (
    <>
      <p>Note</p>

      {visSidebar == true && <h2>Sidebjælke</h2>}
    </>
  );
}
