import React from "react";
import Pokedex from "../../components/Pokedex/Pokedex";
import { Pokemon } from "../../../types";
import "./PokedexPage.css";

const PokedexPage: React.FC = () => {
  const pokemons: Pokemon[] = [];

  const pokemonsTotal = pokemons.length;

  return (
    <div className="pokedex">
      <header className="pokedex__header">
        <h2 className="pokedex__title">Pokedex</h2>
        <span className="pokedex__counter">{`Total: ${pokemonsTotal}`}</span>
      </header>
      <Pokedex pokemons={pokemons} />
    </div>
  );
};

export default PokedexPage;
