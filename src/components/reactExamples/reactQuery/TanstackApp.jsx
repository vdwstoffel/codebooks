import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import BrowserWindow from "../../BrowserWindow/BrowserWindow";

import BasicReactQueryExample from "./BasicReactQueryExample";
import Mutations from "./Mutation";
// import MutationFnMultipleArgs from "./MutationFnMultipleArgs";
// import QueryHooks from "./QueryHook";

const queryClient = new QueryClient();

export default function TanstackApp({ app }) {
  return (
    <BrowserWindow>
      <QueryClientProvider client={queryClient}>
        {app === "BasicExample" && <BasicReactQueryExample />}
        {app === "Mutations" && <Mutations />}
      </QueryClientProvider>
    </BrowserWindow>
  );
}
