import BrowserWindow from "../../BrowserWindow/BrowserWindow";
import Counter from "./Counter";

export default function CounterApp() {
  return (
    <BrowserWindow>
      <Counter>
        <Counter.Label label="Counter Example" />
        <Counter.Increase icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
    </BrowserWindow>
  );
}
