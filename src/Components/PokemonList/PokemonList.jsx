import Pokemon from "../Pokemon/Pokemon";
import { usePokemonList } from "../Hooks/usePokemonList";

const PokemonList = () => {
  const DEFAULT_URL = `https://pokeapi.co/api/v2/pokemon/`;

  const [pokemonList, setPokedexurl, nextUrl, prevUrl] =
    usePokemonList(DEFAULT_URL);
  return (
    <div className="flex flex-col items-center my-8">
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
          <Pokemon
            name={p.name}
            url={p.image}
            key={p.id}
            id={p.id}
            type={p.type[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
