import { useReducer } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow"

const initialState = {
  balance: 0,
  loan: 0,
};

function reducerFn(state, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };

    case "withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "takeLoan": {
      const loanAmount = action.payload;
      return {
        ...state,
        balance: state.balance + loanAmount,
        loan: state.loan + loanAmount,
      };
    }

    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };

    default:
      throw new Error("Unknow Action");
  }
}

export default function UserReducerExample() {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const { balance, loan } = state;

  const makeDeposit = () => dispatch({ type: "deposit", payload: 50 });
  const withdraw = () => dispatch({ type: "withdraw", payload: 30 });
  const takeLoan = () => dispatch({ type: "takeLoan", payload: 100 });
  const payLoan = () => dispatch({ type: "payLoan" });

  return (
    <BrowserWindow>
      <div style={{ display: "flex", gap: "3em" }}>
        <span>Balance: $ {balance}</span>
        <span>Outstanding loan: $ {loan}</span>
      </div>
      <div style={{ display: "flex", gap: "3em" }}>
        <button onClick={makeDeposit}>Deposit $50</button>
        <button onClick={withdraw}>Withdraw $30</button>
        <button onClick={takeLoan}>Take $100 loan</button>
        <button onClick={payLoan}>Repay loan</button>
      </div>
    </BrowserWindow>
  );
}

