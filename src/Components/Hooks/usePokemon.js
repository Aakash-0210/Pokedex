import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import downloadPokemon from "../../utils/downloadPokemon";

export const usePokemon = (pokemonName) => {
    const { id } = useParams();
    const POKEMON_DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon, setPokemon] = useState({});
    const [pokemonList, setPokemonList] = useState([]);
    const [pokedexurl, setPokedexurl] = useState();
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const fetchPokemonDetail = async function () {
        const response = await axios.get(POKEMON_DEFAULT_URL + ((pokemonName) ? pokemonName : id));
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
        const types = response.data.types.map((t) => t.type.name)
        return types[0]
    };

    async function downloadPokemonAndRelated(id) {
        const type = await fetchPokemonDetail(id);
        await downloadPokemon(setPokemonList, pokedexurl, setPokedexurl, nextUrl, setNextUrl, prevUrl, setPrevUrl, `https://pokeapi.co/api/v2/type/${type}`);
        setPokemonList((prev) => prev.filter(p => p.id != id))
    }

    useEffect(() => {
        downloadPokemonAndRelated(id)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [id, pokemonName]);

    return { pokemon, pokemonList }
}

