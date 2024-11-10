import { DetailsParams } from "@/types/Params";
import { getDetails, baseImgPath } from "@/lib/details";
import { MovieProfile } from "@/types/MovieDetails";
import InfoModal from "@/ui/InfoModal";
import YouTubePlayerWithCarousel from "@/ui/YoutubePlayerWithCarousel";
import { Video } from "@/types/Youtube";

export default async function DetailsPage({
    params,
}: {
    params: Promise<DetailsParams>
}) {
    const { resource, id } = await params;
    const data = {
        id: id.toString(),
        resource: resource
    }
    const details: MovieProfile = await getDetails(data);
    const formater = new Intl.ListFormat("es-ES", {
        style: "long",
        type: "conjunction",
    });
    const castList = formater.format(
        details.credits.cast.slice(0, 10).map((actor) => actor.name),
    );
    const genresList = formater.format(details.genres.map((genre) => genre.name));
    const directorName = details.credits.crew?.find(
        (member) => member.job === "Director",
    )?.name;
    const title = details.title ?? details.name ?? "No Title Available";

    const modalData = {
        title,
        date: details.release_date ?? details.first_air_date,
        directorName: directorName ?? "No disponible",
        castList,
        genresList,
        overview: details.overview,
    }
    const videosData = details.videos.results
        .filter((video) => video.site === "YouTube")
        .slice(0, 5);

    const videos: Video[] = videosData.map((video) => ({
        key: video.key,
        name: video.name,
        thumbnail: `https://img.youtube.com/vi/${video.key}/mqdefault.jpg`,
    }));

    return (
        <>
            <div
                className="absolute -z-10 inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${baseImgPath}${details.backdrop_path})` }}
            >
                <section className="flex flex-col max-w-[1500px] items-center justify-end mx-auto h-screen">
                    <div className="flex gap-x-12 bg-black/50 p-10 rounded-t-lg w-full">
                        <section
                            id="details"
                            className="flex flex-col w-1/2"
                        >
                            <div className="space-y-6">
                                <h2
                                    className="text-gray-200 text-6xl font-bold capitalize underline decoration-solid underline-offset-8"
                                >
                                    {title}
                                </h2>
                                <p className="text-xl text-gray-200 min-h-4">
                                    {
                                        details.overview
                                            ? details.overview.slice(0, 200) + "..."
                                            : "No hay descripción"
                                    }
                                </p>
                                {
                                    details.first_air_date && (
                                        <p className="flex text-xl text-gray-200 min-h-4">
                                            {/* {`Primera emisión: ${getLocaleDate(details.first_air_date)}`} */}
                                        </p>
                                    )
                                }
                                {
                                    details.number_of_seasons && (
                                        <p className="flex text-xl text-gray-200 min-h-4">
                                            {`Número de temporadas: ${details.number_of_seasons}`}
                                        </p>
                                    )
                                }
                                {
                                    details.number_of_episodes && (
                                        <p className="flex text-xl text-gray-200 min-h-4">
                                            {`Número de episodios: ${details.number_of_episodes}`}
                                        </p>
                                    )
                                }
                            </div>
                            <InfoModal {...modalData} />
                        </section>
                        <section
                            id="videos"
                            className="flex flex-col w-1/2"
                        >
                            {
                                videos.length > 0 && (
                                    <YouTubePlayerWithCarousel
                                        videos={videos}
                                        initialVideoId={videos[0]?.key}
                                    />
                                )
                            }
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}