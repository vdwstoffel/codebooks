import { useEffect, useRef, useState } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

export default function CheckIfElementWasClicked() {
  const ref = useRef();
  const [lastClick, setLastClick] = useState();

  function handleClick(e) {
    if (ref.current && ref.current.contains(e.target)) {
      setLastClick("Clicked inside div");
    } else {
      setLastClick("Clicked outside div");
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });

  return (
    <BrowserWindow>
      <h1>Area Clicked: {lastClick}</h1>
      <div
        style={{ width: "600px", height: "600px", backgroundColor: "darkred" }}
      >
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "orange" }}
          ref={ref}
        >
          Inner Div
        </div>
      </div>
    </BrowserWindow>
  );
}
