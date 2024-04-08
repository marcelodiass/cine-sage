/* eslint-disable no-undef */
import { createContext, useState } from "react";
import { TailSpin } from "react-loading-icons";

export const ShowContext = createContext(null);

// eslint-disable-next-line react/prop-types
function Button({children}) {
	const [loading, setLoading] = useState(false);
	const [recommendation, setRecommendation] = useState();
	const [page, setPage] = useState(1);

	const apiConfiguration = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				process.env.TMDB_API_KEY,
		},
	};

	const fetchMovies = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
				apiConfiguration
			);
			const json = await response.json();
			setRecommendation(
				json.results[Math.floor(Math.random() * json.results.length)]
			);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
			setPage(page + 1);
		}
	};

	if (loading) {
		return <TailSpin />;
	}

	return (
		<ShowContext.Provider value={recommendation}>
			<button
				className="bg-slate-50 p-4 text-lg rounded-md hover:bg-slate-500 ease-in-out duration-200 mt-3"
				onClick={fetchMovies}
			>
				Recommend me a Movie
			</button>
            {children}
		</ShowContext.Provider>
	);
}

export default Button;
