import React, { useEffect, useState } from 'react'
import downloadPokemon from '../../utils/downloadPokemon';

export const usePokemonList = (DEFAULT_URL) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokedexurl, setPokedexurl] = useState(DEFAULT_URL);
    const [nextUrl, setNextUrl] = useState(DEFAULT_URL);
    const [prevUrl, setPrevUrl] = useState(DEFAULT_URL);


    useEffect(() => {
        downloadPokemon(setPokemonList, pokedexurl, setPokedexurl, nextUrl, setNextUrl, prevUrl, setPrevUrl, DEFAULT_URL)
    }, [pokedexurl]);
    return [pokemonList, setPokedexurl, nextUrl, prevUrl]
}

