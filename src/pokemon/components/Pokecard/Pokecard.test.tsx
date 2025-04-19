import { render, screen } from "@testing-library/react";
import Pokecard from "./Pokecard";
import { vaporeon } from "../../fixtures";
import PokemonContextProvider from "../../context/PokemonContextProvider";

describe("Given the Pokecard component", () => {
  describe("When it receives Vaporeon", () => {
    test("Then it should show 'Vaporeon' inside a heading", () => {
      render(<Pokecard pokemon={vaporeon} />, {
        wrapper: PokemonContextProvider,
      });

      const pokemonName = screen.getByRole("heading", { name: /vaporeon/i });

      expect(pokemonName).toBeVisible();
    });

    test("Then it should show an image of Vaporeon", () => {
      render(<Pokecard pokemon={vaporeon} />, {
        wrapper: PokemonContextProvider,
      });

      const pokemonImage = screen.getByAltText(vaporeon.imageAlt);

      expect(pokemonImage).toBeVisible();
    });

    test("Then it should show a 'X' inside a button", () => {
      render(<Pokecard pokemon={vaporeon} />, {
        wrapper: PokemonContextProvider,
      });

      const deleteButton = screen.getByRole("button", { name: "X" });

      expect(deleteButton).toBeVisible();
    });

    test("Then it should show a button with 'Pokeball' as accesible name", () => {
      render(<Pokecard pokemon={vaporeon} />, {
        wrapper: PokemonContextProvider,
      });

      const pokeballButton = screen.getByLabelText(/pokeball/i);

      expect(pokeballButton).toBeVisible();
    });
  });
});
