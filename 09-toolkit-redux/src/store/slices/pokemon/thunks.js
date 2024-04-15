import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // Getting the pokemons
        const { data: pokemonsData } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        // Setting the pokemons
        dispatch(setPokemons({ pokemons: pokemonsData.results, page: page + 1}));
    }
}