import { Pokemon, PokemonCommonData, PokemonFullData } from "../types";

interface PokemonContextStructure {
  pokemons: Pokemon[];
  getAllPokemonNames: () => Promise<string[]>;
  loadPokemons: () => Promise<void>;
  createPokemon: (pokemonCommonData: PokemonCommonData) => Promise<Pokemon>;
  deletePokemonById: (pokemonId: string) => Promise<void>;
  togglePokeball: (pokemonId: string, isCaptured: boolean) => Promise<void>;
  getPokemonFullData: (pokemonId: string) => Promise<PokemonFullData>;
}

export default PokemonContextStructure;
