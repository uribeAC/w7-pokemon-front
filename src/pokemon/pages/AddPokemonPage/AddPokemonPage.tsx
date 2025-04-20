import React from "react";
import PokemonForm from "../../components/PokemonForm/PokemonForm";
import "./AddPokemonPage.css";
import usePokemons from "../../hooks/usePokemons";

const AddPokemonPage: React.FC = () => {
  const { createPokemon } = usePokemons();

  return (
    <main className="add-pokemon__border">
      <div className="add-pokemon">
        <div className="add-pokemon__form">
          <h2 className="add-pokemon__title">Add a new pokemon</h2>
          <PokemonForm action={createPokemon} />
        </div>
        <div className="random-pokemon">
          <img
            src="/random-pokemons.gif"
            alt="gif of random pokemon as pencil drawings"
            className="random-pokemon__gif"
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
};

export default AddPokemonPage;
