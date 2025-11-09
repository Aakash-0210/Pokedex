import SearchBar from "../SearchBar/SearchBar";
import "../../../src/index.css";
import PokemonList from "../PokemonList/PokemonList";
const Pokedex = () => {
  return (
    <div className="flex items-center flex-col justify-center mt-9">
      <h1 className="text-4xl ">Pokedex</h1>
      <SearchBar />
      <PokemonList />
    </div>
  );
};

export default Pokedex;
