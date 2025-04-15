import React from "react";
import { Pokemon } from "../../types";

interface PokedexPageProps {
  pokemons: Pokemon[];
}

const PokedexPage: React.FC<PokedexPageProps> = ({ pokemons }) => {
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
