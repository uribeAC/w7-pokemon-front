import { Pokemon, PokemonCommonData } from "../types";

export interface PokemonClientStructure {
  getPokemons: () => Promise<Pokemon[]>;
  getPokemonPokedexPosition: (pokemonName: string) => Promise<string>;
  addPokemon: (pokemonCommonData: PokemonCommonData) => Promise<Pokemon>;
}
export interface pokemonsTypes {
  types: { type: { name: string } }[];
}
