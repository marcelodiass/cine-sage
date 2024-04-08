import { useContext } from "react";
import { ShowContext } from "../Button/Button";

function Show() {
	const show = useContext(ShowContext);

    if (!show) {
        return null
    }

	return (
        <div className="flex flex-col items-center gap-5 text-slate-50 font-inter">
            <h3 className="text-3xl">{show.original_title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt="Show Poster" className="w-80 self-center rounded-2xl hover:bg-slate-950" />
            <p className="text-xl">Rating: {show.vote_average.toFixed(1)}</p>
            <p className="max-w-xl text-center">{show.overview}</p>
        </div>
    );
}

export default Show;
