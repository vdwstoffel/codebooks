import toast, { Toaster } from "react-hot-toast";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

const notify = () => toast("Here is your toast.");

export default function ToastExample() {
  return (
    <BrowserWindow>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </BrowserWindow>
  );
}
