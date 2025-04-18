import React, { useState } from "react";
import { Pokemon, PokemonCommonData, PokemonFormData } from "../../types";
import PokemonClient from "../../client/PokemonClient";
import "./PokemonForm.css";
import { useNavigate } from "react-router";
import FormError from "../../../components/FormError/FormError";

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
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      const pokemonCommonData = await pokemonClient.getPokemonPokedexPosition(
        pokemonData.name,
      );

      try {
        await action(pokemonCommonData);

        navigate("/pokedex");
      } catch {
        setErrorMessage("Pokemon already in pokedex");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
        return;
      }
    } catch {
      setErrorMessage("Pokemon dosen't exist");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <form className="pokemon-form" onSubmit={onSubmitForm}>
      <div className="pokemon-form__group">
        <label htmlFor="name" className="pokemon-form__text">
          Name:
        </label>
        <input
          autoComplete="pikachu"
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
      <FormError message={errorMessage} />
    </form>
  );
};

export default PokemonForm;
