import { Pokemon } from "../../types";

export interface PokemonClientStructure {
  getPokemons: () => Promise<Pokemon[]>;
}
