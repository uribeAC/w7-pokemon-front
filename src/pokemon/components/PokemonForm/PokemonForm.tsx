import React, { useState } from "react";
import { PokemonFormData } from "../../types";
import "./PokemonForm.css";

const PokemonForm: React.FC = () => {
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

  return (
    <form className="pokemon-form" action="">
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
