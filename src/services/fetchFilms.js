import axios from "axios";

const fetchFilms = () => {
  return axios.get(`${import.meta.env.VITE_URL_API}films/`);
};

export default fetchFilms;
