const baseUrl = "https://api.themoviedb.org/3"
const options = {
    method: 'GET', headers: { accept: 'application/json' }, next: {
        revalidate: 3600 * 24
    }
};
const { TMDB_API_KEY } = process.env

const getPopularMovies = async () => {
    const url = new URL(baseUrl)
    url.pathname = "/3/movie/popular"
    url.searchParams.append('include_adult', 'false')
    url.searchParams.append('language', 'es-ES')
    url.searchParams.append('region', 'es_ES')
    url.searchParams.append('page', '1')
    url.searchParams.append('api_key', TMDB_API_KEY!)

    const response = await fetch(
        url,
        options
    );
    return response.json();
}

const getPopularTvShows = async () => {
    const url = new URL(baseUrl)
    url.pathname = "/3/tv/popular"
    url.searchParams.append('include_adult', 'false')
    url.searchParams.append('language', 'es-ES')
    url.searchParams.append('region', 'es_ES')
    url.searchParams.append('page', '1')
    url.searchParams.append('api_key', TMDB_API_KEY!)

    const response = await fetch(
        url,
        options
    );
    return response.json();
}

const baseImgPath = "https://image.tmdb.org/t/p/w780";

export { getPopularMovies, getPopularTvShows, baseImgPath };