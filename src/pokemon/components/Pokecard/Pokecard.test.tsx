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
  });
});
