import { getLocaleDate, slugify } from "@/lib/utils";
import { baseImgPath } from "@/lib/popular";
import { Movie } from "@/types/Movie";
import { Link } from "next-view-transitions";

interface Props {
    movie: Movie;
}

const PostCard = ({ movie }: Props) => {
    const date = movie.release_date ?? movie.first_air_date;
    const releaseDate = getLocaleDate(date);
    const slug = slugify(movie.title ?? movie.name);
    const type = movie.title ? "movie" : "tv";

    return (
        <Link
            href={`/details/${type}/${movie.id}/${slug}`}
            className="aspect-2/3 h-72 w-48 md:h-poster md:w-poster rounded-lg overflow-hidden group"
            data-title={movie.title ?? movie.name}
        >
            <div className="relative w-full h-full">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${baseImgPath}${movie.poster_path})` }}
                >
                </div>
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 transition-opacity duration-300 ease-in-out group-hover:opacity-90"
                >
                </div>
                <div
                    className="absolute inset-0 h-full p-4 flex flex-col justify-end transition-transform duration-300 ease-in-out group-hover:translate-y-2"
                >
                    <h2
                        className="text-lg font-bold text-white"
                    >
                        {movie.title ?? movie.name}
                    </h2>
                    <p className="text-xs text-slate-200">
                        {releaseDate}
                    </p>
                    <div
                        className="h-1 w-0 mt-1 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full rounded-full"
                    >
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard;