import { createContext, useReducer } from "react";

import { initialState, userReducerFn } from "./userReducer";

// Export the userContext, this will be used in the custom hook
export const userContext = createContext({});

export default function UserContextProvider({ children }) {
  const [{ name, age }, dispatch] = useReducer(userReducerFn, initialState);

  const updateName = (name) => dispatch({ type: "updateName", payload: name });
  const updateAge = () => dispatch({ type: "updateAge" });

  // Give all children access to the values
  return (
    <userContext.Provider value={{ name, age, updateName, updateAge }}>
      {children}
    </userContext.Provider>
  );
}
