import { createContext, useContext, useState } from "react";

// 1. Create Context
const CounterContext = createContext();

// 2. Create Parent component
export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

// 3. Create helper child components
function Label({ label }) {
  return <h1>{label}</h1>;
}

function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Increase({ icon = "+" }) {
  const { increment } = useContext(CounterContext);
  return <button onClick={increment}>{icon}</button>;
}

function Decrement({ icon = "-" }) {
  const { decrement } = useContext(CounterContext);
  return <button onClick={decrement}>{icon}</button>;
}

// 4. Add child compoents as properties
Counter.Label = Label;
Counter.Count = Count;
Counter.Increase = Increase;
Counter.Decrement = Decrement;
