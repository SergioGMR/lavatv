import { getPopularMovies } from "@/lib/popular";
import PosterCard from "@/ui/PosterCard";
import { Movie } from "@/types/Movie";

const PopularMovies = async () => {
    const data = await getPopularMovies();
    const popularMovies = data.results;
    return (
        <section className="flex flex-col my-12 gap-y-8">
            <h2 className="md:ml-24 lg:ml-0 text-center md:text-left text-2xl font-bold w-full">
                Películas Populares
            </h2>
            <div
                className="grid grid-cols-5 gap-y-12 grid-row-auto justify-between lg:justify-start items-center w-full mx-auto md:mx-12 lg:mx-0"
            >
                {popularMovies.slice(0, 10).map((movie: Movie) => <PosterCard key={movie.id} movie={movie} />)}
            </div>
        </section>
    )
};

export default PopularMovies;