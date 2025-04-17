import React, { useState } from "react";
import { PokemonFormData } from "../../types";
import usePokemons from "../../hooks/usePokemons";
import PokemonClient from "../../client/PokemonClient";
import "./PokemonForm.css";
import { useNavigate } from "react-router";

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

  const pokemonClient = new PokemonClient();
  const { createPokemon } = usePokemons();
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
        await createPokemon(await pokemonCommonData);

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
