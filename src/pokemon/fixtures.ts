import { Pokemon } from "./types";

export const vaporeon: Pokemon = {
  id: "987654321",
  name: "Vaporeon",
  types: ["water"],
  pokedexPosition: "0134",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  imageAlt: "Vaporeon pixelart",
  isCaptured: false,
};

export const jolteon: Pokemon = {
  id: "192837465",
  name: "Jolteon",
  types: ["electric"],
  pokedexPosition: "0135",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  imageAlt: "Jolteon pixelart",
  isCaptured: false,
};

export const flareon: Pokemon = {
  id: "123456789",
  name: "Flareon",
  types: ["fire"],
  pokedexPosition: "0136",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  imageAlt: "Flareon pixelart",
  isCaptured: false,
};

export const eevees: Pokemon[] = [vaporeon, jolteon, flareon];
