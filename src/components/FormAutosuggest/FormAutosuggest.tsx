import { useEffect, useState } from "react";
import usePokemons from "../../pokemon/hooks/usePokemons";

interface FormAutosuggestProps {
  dataId: string;
  pokemonName: string;
}

const FormAutosuggest: React.FC<FormAutosuggestProps> = ({
  dataId,
  pokemonName,
}) => {
  const largerNameLenght = 3;
  const isNameLarger = pokemonName.length >= largerNameLenght;

  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const { getAllPokemonNames } = usePokemons();

  useEffect(() => {
    const getPokemonNames = async () => {
      const apiPokemonNames = await getAllPokemonNames();
      setPokemonNames(apiPokemonNames);
    };

    getPokemonNames();
  }, [getAllPokemonNames]);

  if (isNameLarger) {
    return (
      <datalist id={dataId}>
        {pokemonNames.map((pokemonName) => (
          <option key={pokemonName} value={pokemonName}></option>
        ))}
      </datalist>
    );
  } else {
    return <></>;
  }
};

export default FormAutosuggest;
