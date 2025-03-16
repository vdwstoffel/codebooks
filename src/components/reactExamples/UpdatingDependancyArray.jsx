import React, { useState, useEffect } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

import { getUsers, addUser } from "../../helpers/fakeServer";

export default function UpdatingDependancyArray() {
  const [users, setUsers] = useState([]);
  const [lastAction, setLastAction] = useState(new Date().toISOString());

  async function fetchUsers() {
    const users = await getUsers();
    setUsers(users);
  }

  async function addNewUser() {
    await addUser({ name: "Doe", age: 30 });
    setLastAction(new Date().toISOString());
  }

  useEffect(() => {
    fetchUsers();
  }, [lastAction]);

  return (
    <BrowserWindow>
      <h1>Last action at: {lastAction}</h1>
      <button onClick={addNewUser}>Add</button>
      {users.map((user, idx) => (
        <p key={idx}>
          {user.name} - {user.age}
        </p>
      ))}
    </BrowserWindow>
  );
}
