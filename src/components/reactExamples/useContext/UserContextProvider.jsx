import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userName, setUsername] = useState("");

  const updateName = (name) => setUsername(name);

  return (
    <UserContext.Provider value={{ userName, updateName }}>
      {children}
    </UserContext.Provider>
  );
}
