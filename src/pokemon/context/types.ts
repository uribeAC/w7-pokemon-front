import { Pokemon } from "../types";

interface PokemonContextStructure {
  pokemons: Pokemon[];
  loadPokemons: () => Promise<void>;
}

export default PokemonContextStructure;
