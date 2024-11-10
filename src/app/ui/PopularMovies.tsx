import { getPopularMovies } from "@/lib/popular";
import PosterCard from "@/ui/PosterCard";
import { Movie } from "@/types/Movie";
import { Key } from "react";

const PopularMovies = async () => {
    const moivieData = await getPopularMovies();
    const popularMovies = moivieData.results;

    return (
        <section className="flex flex-col my-6 gap-y-4">
            <h2 className="md:ml-24 lg:ml-0 text-center md:text-left text-2xl font-bold w-full">
                Películas Populares
            </h2>
            <div className="relative grid grid-cols-2 md:grid-cols-none grid-flow-row md:grid-flow-col justify-between items-center w-auto md:w-full mx-auto gap-8 md:gap-0">
                {popularMovies.slice(0, 6).map((movie: Movie, index: Key) => {
                    return (
                        <PosterCard key={index} movie={movie} />
                    )
                })}
            </div>
        </section>
    )
};

export default PopularMovies;