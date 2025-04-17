import { Pokemon } from "../types";
import { PokemonDto } from "./types";

export const mapPokemonDtoToPokemonWithTypes = (
  { name, pokedexPosition, ...pokemonDto }: PokemonDto,
  pokemonTypes: string[],
): Pokemon => {
  const pokemon: Pokemon = {
    ...pokemonDto,
    name,
    types: pokemonTypes,
    pokedexPosition: `N.º${pokedexPosition}`,
    imageAlt: `${name} pixelart`,
  };

  return pokemon;
};
