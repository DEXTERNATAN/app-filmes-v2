import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c3d43011d990c6611808dac73913d480",
    language: "pt-BR",
    include_adult: false,
  },
});
