import { useContext } from "react";

import BrowserWindow from "../../BrowserWindow/BrowserWindow";

import UserContextProvider, { UserContext } from "./UserContextProvider";

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
  const { updateName } = useContext(UserContext);

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
  const { userName } = useContext(UserContext);

  return (
    <div>
      <p>UserName: {userName}</p>
    </div>
  );
}
