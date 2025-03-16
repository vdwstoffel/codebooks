import BrowserWindow from "../../BrowserWindow/BrowserWindow";

export default function ChildComponents() {
  return (
    <BrowserWindow>
      <Container>
        <button>Click Me!</button>
      </Container>
    </BrowserWindow>
  );
}

function Container({ children }) {
  return (
    <div style={{ backgroundColor: "darkred", padding: "3em" }}>{children}</div>
  );
}
