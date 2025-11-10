import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const PokemondetailPage = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  const fetchPokemonDetail = async function () {
    const POKEMON_DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon/";
    const response = await axios.get(POKEMON_DEFAULT_URL + id);
    console.log(response.data);
    const pokemon = {
      name:
        response.data.name.charAt(0).toUpperCase() +
        response.data.name.slice(1),
      id: response.data.id,
      image: response.data.sprites.other.dream_world.front_default,
      type: response.data.types,
      height: response.data.height,
      weight: response.data.weight,
    };
    setPokemon(pokemon);
  };

  useEffect(() => {
    fetchPokemonDetail();
    console.log(pokemon);
  }, []);
  return (
    <>
      <Link to="/" className="flex justify-center">
        <h1 className=" font-bold text-2xl pt-5 border-b w-fit hover:text-red-500 transition-all">
          Pokedex
        </h1>
      </Link>
      {pokemon && (
        <div className="flex items-center flex-col justify-center">
          <h1 className="font-bold text-3xl mt-5 ">{pokemon.name}</h1>
          <div className="mt-5 ">
            <img
              src={pokemon.image}
              alt={pokemon.image}
              className="h-[500px] w-[500px]"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <h3 className="text-black text-xl font-semibold">
              Height:<span className="ml-1">{pokemon.height}</span>
            </h3>
            <h3 className="text-black text-xl font-semibold">
              Weight:<span className="ml-1">{pokemon.weight}</span>
            </h3>
          </div>
          <div className="flex h-[50px] items-center justify-center mt-4">
            <h3 className="text-black text-xl font-semibold">Types:</h3>

            {pokemon.type?.map((t) => (
              <span
                className="ml-1 font-semibold  rounded-md px-4 py-3 bg-blue-400"
                key={t.type.name}
              >
                {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PokemondetailPage;
