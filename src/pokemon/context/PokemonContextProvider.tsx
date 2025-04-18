import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { Pokemon, PokemonCommonData } from "../types";
import PokemonContext from "./PokemonContext";
import PokemonContextStructure from "./types";
import PokemonClient from "../client/PokemonClient";

const PokemonContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const pokemonClient = useMemo(() => new PokemonClient(), []);

  const loadPokemons = useCallback(async (): Promise<void> => {
    const apiPokemons = await pokemonClient.getPokemons();

    setPokemons(apiPokemons);
  }, [pokemonClient]);

  const createPokemon = async (
    pokemonCommonData: PokemonCommonData,
  ): Promise<Pokemon> => {
    const newPokemon = await pokemonClient.addPokemon(pokemonCommonData);

    setPokemons((pokemons) => [...pokemons, newPokemon]);

    return newPokemon;
  };

  const deletePokemonById = async (pokemonId: string): Promise<void> => {
    const deletePokemon = await pokemonClient.deletePokemon(pokemonId);

    setPokemons((pokemons) =>
      pokemons.filter((pokemon) => pokemon.id !== deletePokemon.id),
    );
  };

  const pokemonsContextValue: PokemonContextStructure = {
    pokemons,
    loadPokemons,
    createPokemon,
    deletePokemonById,
  };

  return (
    <PokemonContext.Provider value={pokemonsContextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
