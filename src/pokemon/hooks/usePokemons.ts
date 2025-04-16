import { useContext } from "react";
import PokemonContextStructure from "../context/types";
import PokemonContext from "../context/PokemonContext";

const usePokemons = (): PokemonContextStructure => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("Missing context for Pokemons provider");
  }

  return context;
};

export default usePokemons;
