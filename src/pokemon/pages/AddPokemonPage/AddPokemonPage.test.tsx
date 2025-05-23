import { render, screen } from "@testing-library/react";
import AddPokemonPage from "./AddPokemonPage";
import { MemoryRouter } from "react-router";
import PokemonContextProvider from "../../context/PokemonContextProvider";

describe("Given the AddPokemonPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add a new pokemon' inside a heading", () => {
      render(
        <MemoryRouter>
          <AddPokemonPage />
        </MemoryRouter>,
        { wrapper: PokemonContextProvider },
      );

      const pageTitle = screen.getByRole("heading", {
        name: /add a new pokemon/i,
      });

      expect(pageTitle).toBeVisible();
    });
  });
});
