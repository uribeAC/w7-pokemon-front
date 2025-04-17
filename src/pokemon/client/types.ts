import { Pokemon } from "../../types";

export interface PokemonClientStructure {
  getPokemons: () => Promise<Pokemon[]>;
}
export interface pokemonsTypes {
  types: { type: { name: string } }[];
}
