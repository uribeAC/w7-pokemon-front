import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import "@fontsource-variable/pixelify-sans/index.css";
import "./styles/styles.css";
import PokemonContextProvider from "./pokemon/context/PokemonContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PokemonContextProvider>
        <AppRouter />
      </PokemonContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
