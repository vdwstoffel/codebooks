import React, { useState } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

export default function UpdaterFunction() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  function normalIncrease() {
    // Notice that the count will only update by one since countOne still
    // has the previous state since the component did not update
    setCountOne(countOne + 1);
    setCountOne(countOne + 1);
  }

  function updaterIncrease() {
    // Here, a => a + 1 is your updater function.
    // It takes the pending state and calculates the next state from it.
    setCountTwo((a) => a + 1);
    setCountTwo((a) => a + 1);
  }

  function increase() {
    normalIncrease();
    updaterIncrease();
  }

  return (
    <BrowserWindow>
      <div>
        <button onClick={increase}>+</button>
        <p>Count w/o UpdaterFunctiopn: {countOne}</p>
        <p>Count with UpdaterFunctiopn: {countTwo}</p>
      </div>
    </BrowserWindow>
  );
}
