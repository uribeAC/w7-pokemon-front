import { Pokemon, PokemonCommonData } from "../types";

interface PokemonContextStructure {
  pokemons: Pokemon[];
  getAllPokemonNames: () => Promise<string[]>;
  loadPokemons: () => Promise<void>;
  createPokemon: (pokemonCommonData: PokemonCommonData) => Promise<Pokemon>;
  deletePokemonById: (pokemonId: string) => Promise<void>;
}

export default PokemonContextStructure;
