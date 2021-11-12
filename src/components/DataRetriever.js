import axios from 'axios';
export const dataRetriever = {
    GetGameNames: async function () {
        const games = await axios.get('http://localhost:5000/')
        return games.data;
    },
    GetGamesByPricePoint: async function () {
        const games = await axios.get('http://localhost:5000/games/price/2/')
        return games.data;
    }
}