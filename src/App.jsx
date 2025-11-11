import { Route, Routes } from "react-router";
import Pokedex from "./Components/Pokedex/Pokedex";
import PokemondetailPage from "./Components/PokemonDetailPage/PokemondetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemondetailPage />} />
      <Route
        path="/pokemon/*"
        element={<h1 className="text-3xl text-center">Not found </h1>}
      />
    </Routes>
  );
};
export default App;
