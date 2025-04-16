import { render, screen } from "@testing-library/react";
import PokedexPage from "./PokedexPage";
import PokemonContextProvider from "../../context/PokemonContextProvider";

describe("Given the PokedexPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokedex' inside a heading'", () => {
      render(<PokedexPage />, { wrapper: PokemonContextProvider });

      const pageTitle = screen.getByRole("heading", {
        name: /pokedex/i,
      });

      expect(pageTitle).toBeVisible();
    });
  });
});
