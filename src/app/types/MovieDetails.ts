export type MovieProfile = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date?: Date;
    first_air_date?: Date;
    number_of_seasons?: number;
    number_of_episodes?: number;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title?: string;
    name?: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    videos: Videos;
    images: Images;
    credits: Credits;
}

export type Credits = {
    cast: Cast[];
    crew: Cast[];
}

export type Cast = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: Department;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: null | string;
    cast_id?: number;
    character?: string;
    credit_id: string;
    order?: number;
    department?: Department;
    job?: string;
}

export enum Department {
    Acting = "Acting",
    Art = "Art",
    Camera = "Camera",
    CostumeMakeUp = "Costume & Make-Up",
    Creator = "Creator",
    Crew = "Crew",
    Directing = "Directing",
    Editing = "Editing",
    Lighting = "Lighting",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
    Writing = "Writing",
}

export type Genre = {
    id: number;
    name: string;
}

export type Images = {
    backdrops: string[];
    logos: string[];
    posters: string[];
}

export type ProductionCompany = {
    id: number;
    logo_path: null | string;
    name: string;
    origin_country: string;
}

export type ProductionCountry = {
    iso_3166_1: string;
    name: string;
}

export type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type Videos = {
    results: Result[];
}

export type Result = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: Date;
    id: string;
}
