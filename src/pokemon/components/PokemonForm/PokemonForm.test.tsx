import { render, screen } from "@testing-library/react";
import PokemonForm from "./PokemonForm";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Given the PokemonForm component", () => {
  describe("When it renders", () => {
    test("Then it should a 'Name' text box", () => {
      render(<PokemonForm />);

      const nameTextBox = screen.getByLabelText(/name/i);

      expect(nameTextBox).toBeVisible();
    });

    test("Then it should show 'Add to pokedex' inside a button", () => {
      render(<PokemonForm />);

      const addButton = screen.getByRole("button", { name: /add to pokedex/i });

      expect(addButton).toBeVisible();
    });

    test("Then it should show a 'Add to pokedex' button disabled", () => {
      render(<PokemonForm />);

      const addButton = screen.getByRole("button", { name: /add to pokedex/i });

      expect(addButton).toBeDisabled();
    });
  });

  describe("And the user types 'Chimchar' in 'Name' text box", () => {
    test("Then it should show 'Chimchar' in 'Name' text box", async () => {
      render(<PokemonForm />);
      const pokemonName = "Chimchar";

      const nameTextBox = screen.getByLabelText(/name/i);

      await user.type(nameTextBox, pokemonName);

      expect(nameTextBox).toHaveValue(pokemonName);
    });
  });
});
