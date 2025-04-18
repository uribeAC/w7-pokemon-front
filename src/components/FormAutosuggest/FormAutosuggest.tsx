import PokemonClient from "../../pokemon/client/PokemonClient";

interface FormAutosuggestProps {
  dataId: string;
  pokemonName: string;
}

const pokemonClient = new PokemonClient();
const pokemonNames = await pokemonClient.getPokemonNames();

const FormAutosuggest: React.FC<FormAutosuggestProps> = ({
  dataId,
  pokemonName,
}) => {
  const largerNameLenght = 3;
  const isNameLarger = pokemonName.length >= largerNameLenght;

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
