import api from "./../../helpers/api";
import { APIPATH } from "./../../env/config";

export const getPokemonList = async (params) => {
    try {
        const API = new api();
        const result = await API.get(APIPATH.pokemon, params);
        console.log("getPokemonList", result);
    } catch (error) {
        throw error
    }

}