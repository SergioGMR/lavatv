const baseUrl = "https://api.themoviedb.org/3"
const options = {
    method: 'GET', headers: { accept: 'application/json' }, next: {
        revalidate: 3600 * 24
    }
};
const { TMDB_API_KEY } = process.env

const getPopularMovies = async () => {
    const url = new URL(baseUrl)
    url.pathname = "/3/trending/movie/week"
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
    url.pathname = "/3/trending/tv/week"
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

const baseImgPath = "https://media.themoviedb.org/t/p/w220_and_h330_face";

export { getPopularMovies, getPopularTvShows, baseImgPath };