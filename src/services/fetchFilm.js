import axios from "axios";

const fetchFilm = ({params}) => {
	const { id } = params;
	return axios.get(`${import.meta.env.VITE_URL_API}films/${id}`);
};

export default fetchFilm;
