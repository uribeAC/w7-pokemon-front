import { Pokemon, PokemonCommonData } from "../types";
import { mapPokemonDtoToPokemonWithTypes } from "../dto/transformers";
import { PokemonDto } from "../dto/types";
import { PokemonClientStructure, pokemonsTypes } from "./types";
class PokemonClient implements PokemonClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  private async getPokemonWithTypes(pokemonDto: PokemonDto): Promise<Pokemon> {
    const apiPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonDto.name.toLowerCase()}`,
    );

    if (!apiPokemon.ok) {
      throw new Error("Error fetching pokemon types");
    }

    const apiPokemonTypes = (await apiPokemon.json()) as pokemonsTypes;

    const pokemonTypes = apiPokemonTypes.types.map((type) => type.type.name);

    const pokemon = mapPokemonDtoToPokemonWithTypes(pokemonDto, pokemonTypes);

    return pokemon;
  }

  public async getPokemonNames(): Promise<string[]> {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=1018&offset=0",
    );

    if (!response.ok) {
      throw new Error("Error fetching pokemon names");
    }

    const pokemonNamesData = (await response.json()) as { results: [] };

    const pokemonNames = pokemonNamesData.results.map(
      (pokemon: { name: string }) => pokemon.name,
    );

    return pokemonNames;
  }

  public async getPokemons(): Promise<Pokemon[]> {
    const response = await fetch(`${this.apiUrl}/pokemon`);

    if (!response.ok) {
      throw new Error("Error fetching pokemons");
    }

    const { pokemons: backPokemons } = (await response.json()) as {
      pokemons: PokemonDto[];
    };

    const pokemonsPromises = backPokemons.map(
      async (pokemonDto): Promise<Pokemon> => {
        const pokemon = this.getPokemonWithTypes(pokemonDto);

        return pokemon;
      },
    );

    const pokemons = await Promise.all(pokemonsPromises);

    return pokemons;
  }

  public async getPokemonPokedexPosition(
    pokemonName: string,
  ): Promise<PokemonCommonData> {
    const apiPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`,
    );

    if (!apiPokemon.ok) {
      throw new Error("Error fetching pokemon pokedex position");
    }

    const pokedexPosition = (await apiPokemon.json()) as { id: number };

    const pokemonPokedexPosition = pokedexPosition.id
      .toString()
      .padStart(4, "0");

    const pokemon: PokemonCommonData = {
      name: pokemonName,
      pokedexPosition: pokemonPokedexPosition,
    };

    return pokemon;
  }

  public async addPokemon(
    pokemonCommonData: PokemonCommonData,
  ): Promise<Pokemon> {
    const response = await fetch(`${this.apiUrl}/pokemon`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemonCommonData),
    });

    if (!response.ok) {
      throw new Error("Error adding new pokemon");
    }

    const newPokemonDto = (await response.json()) as PokemonDto;

    const newPokemon = this.getPokemonWithTypes(newPokemonDto);

    return newPokemon;
  }

  public async deletePokemon(pokemonId: string): Promise<PokemonDto> {
    const response = await fetch(`${this.apiUrl}/pokemon/${pokemonId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error deleting pokemon");
    }

    const deletedPokemonDto = (await response.json()) as PokemonDto;

    return deletedPokemonDto;
  }

  public async addToPokeball(pokemonId: string): Promise<Pokemon> {
    const response = await fetch(
      `${this.apiUrl}/pokemon/add-to-poke-ball/${pokemonId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!response.ok) {
      throw new Error("Error adding pokemon to pokeball");
    }

    const pokemonCapturedDto = (await response.json()) as PokemonDto;

    const pokemonCaptured = this.getPokemonWithTypes(pokemonCapturedDto);

    return pokemonCaptured;
  }
}

export default PokemonClient;
