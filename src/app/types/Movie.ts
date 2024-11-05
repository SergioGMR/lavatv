export type Movie = {
    id: number;
    backdrop_path: string;
    title: string;
    name: string | null;
    overview: string;
    release_date: string | null;
    first_air_date: string | null;
    vote_average: number;
}