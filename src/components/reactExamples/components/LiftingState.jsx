import { useState } from "react";

import BrowserWindow from "../../BrowserWindow/BrowserWindow";

export default function LiftingState() {
  const [count, setCount] = useState(0);

  return (
    <BrowserWindow>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </BrowserWindow>
  );
}

function ChildA({ count }) {
  return <div>Count: {count}</div>;
}

function ChildB({ setCount }) {
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increment</button>
  );
}
