import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokemon' inside a level 1 heading", () => {});
    render(<Header />, { wrapper: MemoryRouter });

    const appTitle = screen.getByRole("heading", {
      name: /pokemon/i,
      level: 1,
    });

    expect(appTitle).toBeVisible();
  });

  test("Then it should show a 'Pokedex' link", () => {
    render(<Header />, { wrapper: MemoryRouter });

    const pokedexLink = screen.getByRole("link", { name: /pokedex/i });

    expect(pokedexLink).toBeVisible();
  });
});
