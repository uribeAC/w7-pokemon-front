import React from "react";
import { Pokemon } from "../../types";
import "./Pokecard.css";

interface PokecardProps {
  pokemon: Pokemon;
}

const Pokecard: React.FC<PokecardProps> = ({ pokemon }) => {
  const pokeballClass = pokemon.isCaptured ? "" : " pokemon__pokeball--free";

  return (
    <article className="pokemon">
      <img
        src={`${pokemon.imageUrl}`}
        alt={`${pokemon.imageAlt}`}
        className="pokemon__image"
        width={200}
        height={200}
      />
      <span className="pokemon__position">{pokemon.pokedexPosition}</span>
      <div className="pokemon__data">
        <h3 className="pokemon__name">{pokemon.name}</h3>
        <div className="pokemon__types">
          {pokemon.types.map((type) => (
            <span key={type} className={`pokemon__type pokemon__type--${type}`}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <img
        src="/pokeball.svg"
        alt="pokeball"
        className={`pokemon__pokeball${pokeballClass}`}
        width={40}
        height={40}
      />
    </article>
  );
};

export default Pokecard;
