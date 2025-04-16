import { Pokemon } from "../../types";
import { mapPokemonDtoToPokemon } from "../dto/transformers";
import { PokemonDto } from "../dto/types";
import { PokemonClientStructure } from "./types";

class PokemonClient implements PokemonClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public async getPokemons(): Promise<Pokemon[]> {
    const response = await fetch(`${this.apiUrl}/pokemon`);

    const { pokemons: backPokemons } = (await response.json()) as {
      pokemons: PokemonDto[];
    };

    const pokemonsPromise = backPokemons.map(
      async (pokemonDto): Promise<Pokemon> => {
        const apiPokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonDto.name}`,
        );

        const apiPokemonTypes = (await apiPokemon.json()) as {
          types: [{ type: { name: string } }, { type: { name: string } }];
        };

        const pokemonTypes: string[] = [];
        apiPokemonTypes.types.forEach((type) => {
          const apiType = type.type.name;
          pokemonTypes.push(apiType);
        });

        const pokemon = mapPokemonDtoToPokemon(pokemonDto, pokemonTypes);

        return pokemon;
      },
    );

    const pokemons = await Promise.all(pokemonsPromise);

    return pokemons;
  }
}

export default PokemonClient;
