import React from "react";
import { Pokemon } from "../../types";

const PokedexPage: React.FC = () => {
  const pokemons: Pokemon[] = [];

  return (
    <>
      <header className="page-header">
        <h2 className="page-header__title">Pokedex</h2>
        <span className="pokemon-counter"></span>
      </header>
      <ul className="pokemons">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}></li>
        ))}
      </ul>
    </>
  );
};

export default PokedexPage;
