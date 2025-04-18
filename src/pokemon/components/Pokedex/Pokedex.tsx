import React from "react";
import { Pokemon } from "../../types";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

interface PokedexProps {
  pokemons: Pokemon[];
}

const Pokedex: React.FC<PokedexProps> = ({ pokemons }) => {
  const sortedPokemons = pokemons.toSorted(
    (positionA, positionB) =>
      Number(positionA.pokedexPosition.slice(-4)) -
      Number(positionB.pokedexPosition.slice(-4)),
  );

  return (
    <ul className="pokemons">
      {sortedPokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Pokecard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default Pokedex;
