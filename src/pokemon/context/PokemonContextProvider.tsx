import { PropsWithChildren, useState } from "react";
import { Pokemon } from "../../types";
import PokemonContext from "./PokemonContext";
import PokemonContextStructure from "./types";

const PokemonContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons] = useState<Pokemon[]>([]);

  const pokemonsContextValue: PokemonContextStructure = {
    pokemons,
  };

  return (
    <PokemonContext.Provider value={pokemonsContextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
