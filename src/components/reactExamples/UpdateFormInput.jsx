import React, { useState } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

export default function UpdateFormInput() {
  const [name, setName] = useState("");

  function handleInput(e) {
    setName(e.target.value);
  }

  return (
    <BrowserWindow>
      <input onChange={handleInput} />
      <p>You typed: {name}</p>
    </BrowserWindow>
  );
}
