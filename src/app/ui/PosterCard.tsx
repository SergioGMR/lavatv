import { getLocaleDate, slugify } from "@/lib/utils";
import { baseImgPath } from "@/lib/popular";
import { Movie } from "@/types/Movie";

interface Props {
    movie: Movie;
}

const PostCard = ({ movie }: Props) => {
    const releaseDate = getLocaleDate(movie.release_date ?? movie.first_air_date);
    const slug = slugify(movie.title ?? movie.name);
    const type = movie.title ? "movie" : "tv";

    return (
        <a
            href={`/details/${type}/${movie.id}/${slug}`}
            className="aspect-9/16 w-64 h-72 rounded-lg overflow-hidden group"
            data-title={movie.title ?? movie.name}
        >
            <div className="relative w-full h-full">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${baseImgPath}${movie.backdrop_path})` }}
                >
                </div>
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 transition-opacity duration-300 ease-in-out group-hover:opacity-90"
                >
                </div>
                <div
                    className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-300 ease-in-out group-hover:translate-y-2"
                >
                    <h2
                        className="text-2xl font-bold text-white mb-2"
                    >
                        {movie.title ?? movie.name}
                    </h2>
                    <p className="text-sm text-gray-300 mb-4">
                        {releaseDate}
                    </p>

                    <div
                        className="h-1 w-0 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"
                    >
                    </div>
                </div>
            </div>
        </a>
    )
}

export default PostCard;