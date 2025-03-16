const initialState = {
  name: "",
  age: 0,
};

function userReducerFn(state, action) {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.payload };

    case "updateAge":
      return { ...state, age: state.age + 1 };

    default:
      throw new Error("Unknow action: ", action.type);
  }
}

// Create the initial state and function and export
export { initialState, userReducerFn };
