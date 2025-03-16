import { useContext } from "react";

import { userContext } from "./UserContextProvider";

export function useUser() {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error("userReducer used outside Provider");
  }

  return context;
}
