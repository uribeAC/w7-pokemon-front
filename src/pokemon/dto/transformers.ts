import { Pokemon } from "../../types";
import { PokemonDto } from "./types";

export const mapPokemonDtoToPokemon = (pokemonDto: PokemonDto): Pokemon => {
  const pokemon: Pokemon = { ...pokemonDto, types: [] };

  return pokemon;
};
