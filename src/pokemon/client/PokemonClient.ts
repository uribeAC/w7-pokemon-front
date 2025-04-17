import { Pokemon } from "../types";
import { mapPokemonDtoToPokemon } from "../dto/transformers";
import { PokemonDto } from "../dto/types";
import { PokemonClientStructure, pokemonsTypes } from "./types";
class PokemonClient implements PokemonClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public async getPokemons(): Promise<Pokemon[]> {
    const response = await fetch(`${this.apiUrl}/pokemon`);

    const { pokemons: backPokemons } = (await response.json()) as {
      pokemons: PokemonDto[];
    };

    const pokemonsPromises = backPokemons.map(
      async (pokemonDto): Promise<Pokemon> => {
        const apiPokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonDto.name.toLowerCase()}`,
        );

        const apiPokemonTypes = (await apiPokemon.json()) as pokemonsTypes;

        const pokemonTypes = apiPokemonTypes.types.map(
          (type) => type.type.name,
        );

        const pokemon = mapPokemonDtoToPokemon(pokemonDto, pokemonTypes);

        return pokemon;
      },
    );

    const pokemons = await Promise.all(pokemonsPromises);

    return pokemons;
  }
}

export default PokemonClient;
