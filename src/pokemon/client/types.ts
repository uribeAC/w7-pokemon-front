import { PokemonDto } from "../dto/types";
import { Pokemon, PokemonCommonData } from "../types";

export interface PokemonClientStructure {
  getPokemonNames: () => Promise<string[]>;
  getPokemons: () => Promise<Pokemon[]>;
  getPokemonPokedexPosition: (
    pokemonName: string,
  ) => Promise<PokemonCommonData>;
  addPokemon: (pokemonCommonData: PokemonCommonData) => Promise<Pokemon>;
  deletePokemon: (pokemonId: string) => Promise<PokemonDto>;
  addToPokeball: (pokemonId: string) => Promise<Pokemon>;
}
export interface pokemonsTypes {
  types: { type: { name: string } }[];
}
