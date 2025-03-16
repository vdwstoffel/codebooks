import BrowserWindow from "../BrowserWindow/BrowserWindow";

import UserContextProvider from "./UserContextProvider";
import { useUser } from "./useUser";

export default function WithContextExample() {
  return (
    <BrowserWindow>
      <UserContextProvider>
        <UserDetails />
        <UserEdits />
      </UserContextProvider>
    </BrowserWindow>
  );
}

function UserDetails() {
  const { name, age } = useUser();

  return (
    <div>
      <span>Name: {name}</span>
      <span>Age: {age}</span>
    </div>
  );
}

function UserEdits() {
  const { updateName, updateAge } = useUser();

  const updateNameHandler = (e) => updateName(e.target.value);

  return (
    <div>
      <input onChange={updateNameHandler} />
      <button onClick={updateAge}>increment</button>
    </div>
  );
}

