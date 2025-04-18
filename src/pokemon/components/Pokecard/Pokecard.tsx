import React from "react";
import { Pokemon } from "../../types";
import usePokemons from "../../hooks/usePokemons";
import "./Pokecard.css";

interface PokecardProps {
  pokemon: Pokemon;
}

const Pokecard: React.FC<PokecardProps> = ({
  pokemon: { id, imageAlt, imageUrl, isCaptured, name, pokedexPosition, types },
}) => {
  const pokeballClass = isCaptured ? "" : " pokemon__pokeball--free";
  const { deletePokemonById } = usePokemons();

  return (
    <article className="pokemon">
      <img
        src={`${imageUrl}`}
        alt={`${imageAlt}`}
        className="pokemon__image"
        width={200}
        height={200}
      />
      <div className="pokemon__top-data">
        <span className="pokemon__position">{pokedexPosition}</span>
        <button
          className="pokemon__delete-button"
          onClick={() => deletePokemonById(id)}
        >
          X
        </button>
      </div>
      <div className="pokemon__bottom-data">
        <h3 className="pokemon__name">{name}</h3>
        <div className="pokemon__types">
          {types.map((type) => (
            <span key={type} className={`pokemon__type pokemon__type--${type}`}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <button className="pokemon__toggle-button">
        <img
          src="/pokeball.svg"
          alt="pokeball"
          className={`pokemon__pokeball${pokeballClass}`}
          width={40}
          height={40}
        />
      </button>
    </article>
  );
};

export default Pokecard;
