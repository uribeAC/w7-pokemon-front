import { render, screen } from "@testing-library/react";
import Pokedex from "./Pokedex";
import { eevees, flareon, jolteon, vaporeon } from "../../fixtures";
import PokemonContextProvider from "../../context/PokemonContextProvider";
import { MemoryRouter } from "react-router";

describe("Given the Pokedex component", () => {
  describe("When it receives 'Vaporeon', 'Jolteon' and 'Flareon'", () => {
    test("Then it should show the names of 'Vaporeon', 'Jolteon' and 'Flareon' inside a heading", () => {
      render(
        <MemoryRouter>
          <Pokedex pokemons={eevees} />
        </MemoryRouter>,
        {
          wrapper: PokemonContextProvider,
        },
      );

      const vaporeonName = screen.getByRole("heading", { name: vaporeon.name });
      const jolteonName = screen.getByRole("heading", { name: jolteon.name });
      const flareonName = screen.getByRole("heading", { name: flareon.name });

      expect(vaporeonName).toBeVisible();
      expect(jolteonName).toBeVisible();
      expect(flareonName).toBeVisible();
    });
  });
});
