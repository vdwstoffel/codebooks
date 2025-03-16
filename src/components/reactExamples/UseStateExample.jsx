import React, { useState } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

export default function UseStateExample() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <BrowserWindow>
      <button onClick={decrease}>-</button>
      <p>Count: {count}</p>
      <button onClick={increase}>+</button>
    </BrowserWindow>
  );
}
