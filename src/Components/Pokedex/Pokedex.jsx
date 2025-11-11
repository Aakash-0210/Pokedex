import SearchBar from "../SearchBar/SearchBar";
import "../../../src/index.css";
import PokemonList from "../PokemonList/PokemonList";
import { useEffect, useState } from "react";
import PokemondetailPage from "../PokemonDetailPage/PokemondetailPage";
const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceValue, setdebounceValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebounceValue(searchTerm);
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  return (
    <div className="flex items-center flex-col justify-center mt-9">
      <h1 className="text-4xl ">Pokedex</h1>
      <SearchBar updateSearchTerm={setSearchTerm} />
      {debounceValue ? (
        <PokemondetailPage pokemonName={debounceValue} />
      ) : (
        <PokemonList />
      )}
    </div>
  );
};

export default Pokedex;
