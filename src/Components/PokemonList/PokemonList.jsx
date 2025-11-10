import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const DEFAULT_URL = `https://pokeapi.co/api/v2/pokemon/`;
  const [pokedexurl, setPokedexurl] = useState(DEFAULT_URL);
  const [nextUrl, setNextUrl] = useState(DEFAULT_URL);
  const [prevUrl, setPrevUrl] = useState(DEFAULT_URL);

  const fetchPokemonData = async function () {
    const POKEMON_URL = pokedexurl ? pokedexurl : DEFAULT_URL;
    const respons = await axios.get(POKEMON_URL);
    const result = respons.data.results;
    setNextUrl(respons.data.next);
    setPrevUrl(respons.data.previous);

    const pokemonListData = await Promise.all(
      result.map(async (pokemon) => {
        const res = await axios.get(pokemon.url);
        return {
          name: res.data.name,
          id: res.data.id,
          image: res.data.sprites.other.dream_world.front_default,
          type: res.data.types.map((t) => t.type.name),
        };
      })
    );
    setPokemonList(pokemonListData);
  };
  useEffect(() => {
    fetchPokemonData();
  }, [pokedexurl]);

  return (
    <div className="flex flex-col items-center  my-8">
      <div className="flex gap-3">
        <button
          onClick={() => setPokedexurl(prevUrl)}
          className="bg-amber-700 px-8 py-2 rounded-md font-semibold cursor-pointer"
        >
          Prvious
        </button>
        <button
          onClick={() => setPokedexurl(nextUrl)}
          className="bg-amber-700 px-8 py-2 rounded-md font-semibold cursor-pointer"
        >
          Next
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly items-center ">
        {pokemonList.map((p) => (
          <Pokemon name={p.name} url={p.image} key={p.id} id={p.id} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
