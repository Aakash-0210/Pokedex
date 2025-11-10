import { Link } from "react-router";
import { usePokemon } from "../Hooks/usePokemon";
import Pokemon from "../Pokemon/Pokemon";

const PokemondetailPage = () => {
  const { pokemon, pokemonList } = usePokemon();
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
          <div className="flex h-[50px] items-center justify-center mt-4 ">
            <h3 className="text-black text-xl font-semibold mr-2  ">Types:</h3>

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
      <h3 className="text-3xl font-bold  m-10">Similar Pokemons</h3>
      <div className="flex flex-wrap justify-center space-x-15 items-center mb-6">
        {pokemonList.map((p) => (
          <Pokemon name={p.name} url={p.image} key={p.id} id={p.id} />
        ))}
      </div>
    </>
  );
};

export default PokemondetailPage;
