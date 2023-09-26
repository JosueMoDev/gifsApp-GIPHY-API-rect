import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "/src/index.css";
import { GiphyApp } from "./GiphyApp";
// import { HashRouter } from "react-router-dom";



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <HashRouter hashType="noslash">
        <GifApp />
      </HashRouter> */}
      <GiphyApp/>
    </QueryClientProvider>
  </React.StrictMode>
);