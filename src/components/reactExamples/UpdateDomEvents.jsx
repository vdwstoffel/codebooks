import React, { useEffect, useState } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

export default function UpdateDomEvents() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function trackeMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("pointermove", trackeMove);
    return () => window.removeEventListener("pointermove", trackeMove);
  }, []);

  return (
    <BrowserWindow>
      <h1>Mouse Position:</h1>
      <p>x: {mousePosition.x}</p>
      <p>y: {mousePosition.y}</p>
    </BrowserWindow>
  );
}
