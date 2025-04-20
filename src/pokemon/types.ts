export interface Pokemon {
  id: string;
  name: string;
  pokedexPosition: string;
  types: string[];
  imageUrl: string;
  imageAlt: string;
  isCaptured: boolean;
}

export type PokemonFormData = Omit<
  Pokemon,
  "id" | "pokedexPosition" | "types" | "imageUrl" | "imageAlt" | "isCaptured"
>;

export type PokemonCommonData = Omit<
  Pokemon,
  "id" | "types" | "imageAlt" | "isCaptured"
>;

export interface PokemonFullData extends Pokemon {
  description: string;
  height: number;
  weight: number;
  abilities: { name: string; description: string }[];
  typeWeakness: string[];
}
