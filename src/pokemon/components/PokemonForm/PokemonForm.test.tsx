import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import PokemonForm from "./PokemonForm";
import PokemonContextProvider from "../../context/PokemonContextProvider";

const user = userEvent.setup();

describe("Given the PokemonForm component", () => {
  const action = vitest.fn();

  beforeEach(() => {
    action.mockClear();
  });

  describe("When it renders", () => {
    test("Then it should a 'Name' text box", () => {
      render(
        <MemoryRouter>
          <PokemonForm action={action} />
        </MemoryRouter>,
        { wrapper: PokemonContextProvider },
      );

      const nameTextBox = screen.getByLabelText(/name/i);

      expect(nameTextBox).toBeVisible();
    });

    test("Then it should show 'Add to pokedex' inside a button", () => {
      render(
        <MemoryRouter>
          <PokemonForm action={action} />
        </MemoryRouter>,
        { wrapper: PokemonContextProvider },
      );

      const addButton = screen.getByRole("button", { name: /add to pokedex/i });

      expect(addButton).toBeVisible();
    });

    test("Then it should show a 'Add to pokedex' button disabled", () => {
      render(
        <MemoryRouter>
          <PokemonForm action={action} />
        </MemoryRouter>,
        { wrapper: PokemonContextProvider },
      );

      const addButton = screen.getByRole("button", { name: /add to pokedex/i });

      expect(addButton).toBeDisabled();
    });
  });

  describe("And the user types 'Chimchar' in 'Name' text box", () => {
    test("Then it should show 'Chimchar' in 'Name' text box", async () => {
      render(
        <MemoryRouter>
          <PokemonForm action={action} />
        </MemoryRouter>,
        { wrapper: PokemonContextProvider },
      );
      const pokemonName = "Chimchar";

      const nameTextBox = screen.getByLabelText(/name/i);

      await user.type(nameTextBox, pokemonName);

      expect(nameTextBox).toHaveValue(pokemonName);
    });
  });
});
