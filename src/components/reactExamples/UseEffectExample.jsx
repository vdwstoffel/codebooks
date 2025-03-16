import React, { useState, useEffect } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow";
import { getUsers } from "../../helpers/fakeServer";

export default function UseEffectExample() {
  const [users, setUsers] = useState([]);

  async function fectUsers() {
    const users = await getUsers();
    setUsers(users);
  }

  useEffect(() => {
    fectUsers();
  }, []);

  return (
    <BrowserWindow>
      {users.map((user, idx) => (
        <p key={idx}>
          {user.name} - {user.age}
        </p>
      ))}
    </BrowserWindow>
  );
}
