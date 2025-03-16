import { useRef } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

export default function UpdatingText() {
  const para = useRef();
  const inp = useRef();

  function updateParagraph() {
    para.current.textContent = "Button click updated Paragraph";
  }

  function updateInput() {
    console.log(inp);
    inp.current.value = "Updated";
  }

  return (
    <BrowserWindow>
      <button onClick={updateParagraph}>Update Paragraph</button>
      <button onClick={updateInput}>Update Input</button>
      <p ref={para}>Paragraph</p>
      <input ref={inp} placeholder="Type Something" />
    </BrowserWindow>
  );
}
