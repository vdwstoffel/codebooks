import BrowserWindow from "../../BrowserWindow/BrowserWindow";

export default function PassingProps() {
  return (
    <BrowserWindow>
      <User name="John" age={42} />
      <User name="Strong" age={31} />
    </BrowserWindow>
  );
}

function User({ name, age }) {
  return (
    <p>
      This is {name}, who is {age}
    </p>
  );
}
