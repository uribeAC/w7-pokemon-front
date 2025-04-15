import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Pokedex' link", () => {
      render(<Navigation />, { wrapper: MemoryRouter });

      const pokedexLink = screen.getByRole("link", {
        name: /pokedex/i,
      });

      expect(pokedexLink).toBeVisible();
    });
  });
});
