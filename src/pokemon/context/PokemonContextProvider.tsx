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

  const pokemonsContextValue: PokemonContextStructure = {
    pokemons,
    loadPokemons,
    createPokemon,
  };

  return (
    <PokemonContext.Provider value={pokemonsContextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
