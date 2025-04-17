import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Pokedex' and 'Add Pokemon' links", () => {
      render(<Navigation />, { wrapper: MemoryRouter });

      const pokedexLink = screen.getByRole("link", {
        name: /pokedex/i,
      });
      const addPokemonLink = screen.getByRole("link", {
        name: /add pokemon/i,
      });

      expect(pokedexLink).toBeVisible();
      expect(addPokemonLink).toBeVisible();
    });
  });
});
