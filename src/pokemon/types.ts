export type Pokemon = {
  id: string;
  name: string;
  pokedexPosition: string;
  types: string[];
  imageUrl: string;
  imageAlt: string;
  isCaptured: boolean;
};

export type PokemonFormData = Omit<
  Pokemon,
  "id" | "pokedexPosition" | "types" | "imageUrl" | "imageAlt" | "isCaptured"
>;
