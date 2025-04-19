import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import usePokemons from "../../hooks/usePokemons";
import { PokemonFullData } from "../../types";
import "./PokemonDetailPage.css";

const PokemonDetailPage: React.FC = () => {
  const { getPokemonFullData } = usePokemons();
  const { id } = useParams<{ id: string }>();

  const [pokemonFullData, setPokemonFullData] =
    useState<PokemonFullData | null>(null);

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonFullData = await getPokemonFullData(id!);

      setPokemonFullData(pokemonFullData);
    };

    getPokemon();
  }, [getPokemonFullData, id]);

  if (!pokemonFullData) {
    return <h2 className="loading">Loading...</h2>;
  }

  const {
    name,
    pokedexPosition,
    description,
    abilities,
    height,
    imageAlt,
    imageUrl,
    isCaptured,
    typeWeakness,
    types,
    weight,
  } = pokemonFullData;

  const pokeballClass = isCaptured ? "" : " pokemon__pokeball--free";

  return (
    <main className="pokedetail">
      <div className="pokedetail__main">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="pokedetail__image"
          width={200}
          height={200}
        />
        <div className="pokedetail__info">
          <header className="pokedetail__header">
            <img
              src="/pokeball.svg"
              alt="pokeball"
              className={`pokemon__pokeball${pokeballClass}`}
              width={30}
              height={30}
            />
            <h2 className="pokedetail__name">{name}</h2>
            <span className="pokedetail__position">{pokedexPosition}</span>
          </header>
          <div className="pokedetail__data">
            <p className="pokedetail__text">{description}</p>
            <span className="pokedetail__text">Height: {height}m</span>
            <span className="pokedetail__text">Weight: {weight}kg</span>
            <div className="pokedetail__stats-abilities">
              <h3 className="pokedetail__text">Abilities:</h3>
              {abilities.map((ability) => (
                <div
                  className="pokedetail__data-ability"
                  key={`${ability.name}1`}
                >
                  <span className="pokedetail__text" key={ability.name}>
                    {ability.name}
                  </span>
                  <span className="pokedetail__text" key={ability.description}>
                    {ability.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pokedetail__types">
        <div className="pokedetail__type-group">
          <span className="pokedetail__text">Types:</span>
          <div className="pokedetail__type">
            {types.map((type) => (
              <span
                key={type}
                className={`pokemon__type pokemon__type--${type}`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className="pokedetail__type-group">
          <span className="pokedetail__text">Weakness:</span>
          <div className="pokedetail__type">
            {typeWeakness.map((type, index) => (
              <span
                key={type + index}
                className={`pokemon__type pokemon__type--${type}`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PokemonDetailPage;
