import React, { useState } from "react";
import { Pokemon, PokemonCommonData, PokemonFormData } from "../../types";
import PokemonClient from "../../client/PokemonClient";
import "./PokemonForm.css";
import { useNavigate } from "react-router";

interface PokemonFormProps {
  action: (pokemonCommonData: PokemonCommonData) => Promise<Pokemon>;
}

const PokemonForm: React.FC<PokemonFormProps> = ({ action }) => {
  const initialPokemonFormData: PokemonFormData = {
    name: "",
  };

  const [pokemonData, setPokemonData] = useState<PokemonFormData>(
    initialPokemonFormData,
  );

  const changePokemonData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setPokemonData({ name: newValue });
  };

  const isFormValid = pokemonData.name !== "";

  const pokemonClient = new PokemonClient();
  const navigate = useNavigate();

  const onSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      const pokemonCommonData = pokemonClient.getPokemonPokedexPosition(
        pokemonData.name,
      );

      try {
        await action(await pokemonCommonData);

        navigate("/pokedex");
      } catch {
        console.log("error");
      }
    } catch {
      throw new Error("Pokemon dosen't exist");
    }
  };

  return (
    <form className="pokemon-form" onSubmit={onSubmitForm}>
      <div className="pokemon-form__group">
        <label htmlFor="name" className="pokemon-form__text">
          Name:
        </label>
        <input
          type="text"
          className="pokemon-form__control"
          id="name"
          value={pokemonData.name}
          onChange={changePokemonData}
          required
        />
      </div>
      <button
        className="pokemon-form__button"
        type="submit"
        disabled={!isFormValid}
      >
        Add to pokedex
      </button>
    </form>
  );
};

export default PokemonForm;
