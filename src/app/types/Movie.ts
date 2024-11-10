export type Movie = {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    name: string | null;
    overview: string;
    release_date: string | undefined;
    first_air_date: string | undefined;
    vote_average: number;
}