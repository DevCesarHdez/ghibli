import { useState, useEffect } from "react";

const useFilterFilm = (filmsData) => {
	const [films] = useState(filmsData);
	const [filter, setFilter] = useState("");
	const [filteredFilms, setFilteredFilms] = useState(filmsData);

	useEffect(() => {
		if (filter) {
			setFilteredFilms(films.filter(film => film.title.toLowerCase().includes(filter.toLowerCase())));
		} else {
			setFilteredFilms(films);
		}
	}, [filter])

	return {films, filter, filteredFilms, setFilter}
}

export default useFilterFilm;