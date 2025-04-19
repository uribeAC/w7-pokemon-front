import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import PokedexPage from "../pokemon/pages/PokedexPage/PokedexPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AddPokemonPage from "../pokemon/pages/AddPokemonPage/AddPokemonPage";
import PokemonDetailPage from "../pokemon/pages/PokemonDetailPage/PokemonDetailPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/pokedex" />}></Route>
        <Route path="pokedex" element={<PokedexPage />}></Route>
        <Route path="add-pokemon" element={<AddPokemonPage />}></Route>
        <Route path="pokemon-detail" element={<PokemonDetailPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
