import { PokemonDto } from "../dto/types";
import { Pokemon, PokemonCommonData } from "../types";

export interface PokemonClientStructure {
  getPokemons: () => Promise<Pokemon[]>;
  getPokemonPokedexPosition: (
    pokemonName: string,
  ) => Promise<PokemonCommonData>;
  addPokemon: (pokemonCommonData: PokemonCommonData) => Promise<Pokemon>;
  deletePokemon: (pokemonId: string) => Promise<PokemonDto>;
}
export interface pokemonsTypes {
  types: { type: { name: string } }[];
}
