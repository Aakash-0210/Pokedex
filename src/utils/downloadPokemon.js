import axios from "axios";

const downloadPokemon = async function (setPokemonList, pokedexurl, setPokedexurl, nextUrl, setNextUrl, prevUrl, setPrevUrl, DEFAULT_URL, limit = 20) {
    const POKEMON_URL = pokedexurl ? pokedexurl : DEFAULT_URL;
    const respons = await axios.get(POKEMON_URL);
    let result = respons.data.results ? respons.data.results : respons.data.pokemon;
    result = result.slice(0, limit)
    setNextUrl(respons.data.next);
    setPrevUrl(respons.data.previous);
    const pokemonListData = await Promise.all(
        result.map(async (p) => {

            const res = p.url ? await axios.get(p.url) : await axios.get(p.pokemon.url);

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

export default downloadPokemon