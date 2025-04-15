import React from "react";
import { Pokemon } from "../../../types";
import "./Pokedex.css";

interface PokedexProps {
  pokemons: Pokemon[];
}

const Pokedex: React.FC<PokedexProps> = ({ pokemons }) => {
  return (
    <ul className="pokemons">
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}></li>
      ))}
    </ul>
  );
};

export default Pokedex;
