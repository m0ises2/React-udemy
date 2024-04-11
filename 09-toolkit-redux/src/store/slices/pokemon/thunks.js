import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // Getting the pokemons
            // const pokemonsResults = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
            // const pokemonsData = await pokemonsResults.json();
        
        const { data: pokemonsData } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        
        console.log(pokemonsData);
        
        // Setting the pokemons
        dispatch(setPokemons({ pokemons: pokemonsData.results, page: page + 1}));
    }
}