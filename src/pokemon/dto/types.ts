import { Pokemon } from "../../types";

export type PokemonDto = Omit<Pokemon, "types" | "imageAlt">;
