import React from "react";
import { Pokemon } from "../../../types";
import "./Pokedex.css";
import Pokecard from "../Pokecard/Pokecard";

interface PokedexProps {
  pokemons: Pokemon[];
}

const Pokedex: React.FC<PokedexProps> = ({ pokemons }) => {
  return (
    <ul className="pokemons">
      {pokemons.map((pokemon) => (
        <li key={`${pokemon.id}${Date.now}`}>
          <Pokecard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default Pokedex;
