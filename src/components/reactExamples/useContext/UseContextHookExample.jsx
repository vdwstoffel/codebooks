import BrowserWindow from "../../BrowserWindow/BrowserWindow";

import UserContextProvider from "./UserContextProvider";
import { useUser } from "./useUser";

export default function UseContextExample() {
  return (
    <BrowserWindow>
      <UserContextProvider>
        <ComponentOne />
        <ComponentTwo />
      </UserContextProvider>
    </BrowserWindow>
  );
}

function ComponentOne() {
  const { updateName } = useUser();

  function updateHandler(e) {
    updateName(e.target.value);
  }

  return (
    <div>
      <p>Create User</p>
      <input onChange={updateHandler} />
    </div>
  );
}

function ComponentTwo() {
  const { userName } = useUser();

  return (
    <div>
      <p>UserName: {userName}</p>
    </div>
  );
}
