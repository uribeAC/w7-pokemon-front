import { createContext } from "react";
import PokemonContextStructure from "./types";

const PokemonContext = createContext<PokemonContextStructure | null>(null);
PokemonContext.displayName = "Pokemon Context";

export default PokemonContext;
