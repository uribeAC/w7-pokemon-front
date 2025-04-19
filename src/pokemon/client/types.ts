import { PokemonDto } from "../dto/types";
import { Pokemon, PokemonCommonData, PokemonFullData } from "../types";

export interface PokemonClientStructure {
  getPokemonNames: () => Promise<string[]>;
  getPokemons: () => Promise<Pokemon[]>;
  getPokemon: (pokemonId: string) => Promise<PokemonFullData>;
  getPokemonPokedexPosition: (
    pokemonName: string,
  ) => Promise<PokemonCommonData>;
  addPokemon: (pokemonCommonData: PokemonCommonData) => Promise<Pokemon>;
  deletePokemon: (pokemonId: string) => Promise<PokemonDto>;
  addToPokeball: (pokemonId: string) => Promise<Pokemon>;
  removeFromPokeball: (pokemonId: string) => Promise<Pokemon>;
}
export interface pokemonsTypes {
  types: { type: { name: string } }[];
}

export interface pokemonApiFullData {
  height: number;
  weight: number;
  abilities: { ability: { name: string; url: string } }[];
  species: { url: string };
  types: { type: { url: string } }[];
}

export interface abilitiesFullData {
  effect_entries: { effect: string; language: { name: string } }[];
}

export interface speciesFullData {
  evolution_chain: { url: string };
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
}

export interface typesFullData {
  damage_relations: { double_damage_from: { name: string }[] };
}
