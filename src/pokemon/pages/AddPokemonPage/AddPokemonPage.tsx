import React from "react";
import PokemonForm from "../../components/PokemonForm/PokemonForm";
import "./AddPokemonPage.css";

const AddPokemonPage: React.FC = () => {
  return (
    <main className="add-pokemon__border">
      <div className="add-pokemon">
        <div className="add-pokemon__form">
          <h2 className="add-pokemon__title">Add a new pokemon</h2>
          <PokemonForm />
        </div>
        <img src="/random-pokemons.gif" alt="" className="random-pokemon" />
      </div>
    </main>
  );
};

export default AddPokemonPage;
