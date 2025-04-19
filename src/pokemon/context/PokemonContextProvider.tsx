import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { Pokemon, PokemonCommonData, PokemonFullData } from "../types";
import PokemonContext from "./PokemonContext";
import PokemonContextStructure from "./types";
import PokemonClient from "../client/PokemonClient";

const PokemonContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const pokemonClient = useMemo(() => new PokemonClient(), []);

  const getAllPokemonNames = useCallback(async (): Promise<string[]> => {
    const pokemonNames = await pokemonClient.getPokemonNames();

    return pokemonNames;
  }, [pokemonClient]);

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

  const togglePokeball = async (
    pokemonId: string,
    isCaptured: boolean,
  ): Promise<void> => {
    if (!isCaptured) {
      const pokemonCaptured = await pokemonClient.addToPokeball(pokemonId);

      const pokemonPosition = pokemons.findIndex(
        (pokemon) => pokemon.id === pokemonId,
      );

      setPokemons((pokemons) =>
        pokemons.toSpliced(pokemonPosition, 1, pokemonCaptured),
      );
      return;
    }

    const pokemonFree = await pokemonClient.removeFromPokeball(pokemonId);

    const pokemonPosition = pokemons.findIndex(
      (pokemon) => pokemon.id === pokemonId,
    );

    setPokemons((pokemons) =>
      pokemons.toSpliced(pokemonPosition, 1, pokemonFree),
    );
  };

  const getPokemonFullData = async (
    pokemonId: string,
  ): Promise<PokemonFullData> => {
    const pokemonFullData = await pokemonClient.getPokemon(pokemonId);

    return pokemonFullData;
  };

  const pokemonsContextValue: PokemonContextStructure = {
    pokemons,
    getAllPokemonNames,
    loadPokemons,
    createPokemon,
    deletePokemonById,
    togglePokeball,
    getPokemonFullData,
  };

  return (
    <PokemonContext.Provider value={pokemonsContextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
