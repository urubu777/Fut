import axios from "axios";
import { API_KEY } from "./constants";

export const api = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": API_KEY,
  },
});
