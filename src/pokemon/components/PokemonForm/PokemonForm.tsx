import React from "react";
import "./PokemonForm.css";

const PokemonForm: React.FC = () => {
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
          required
        />
      </div>
      <button className="pokemon-form__button" type="submit">
        Add to pokedex
      </button>
    </form>
  );
};

export default PokemonForm;
