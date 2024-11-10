type DetailsParams = {
    resource: ['movie', 'tv'];
    id: string;
}

const baseUrl = "https://api.themoviedb.org/3"
const options = {
    method: 'GET', headers: { accept: 'application/json' }, next: {
        revalidate: 3600 * 24
    }
}
const { TMDB_API_KEY } = process.env

// const baseImgPath = "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces";
const baseImgPath = "https://media.themoviedb.org/t/p/original";

const getDetails = async ({ ...params }: DetailsParams) => {
    const { resource, id } = params
    const url = new URL(baseUrl)
    url.pathname = `/3/${resource}/${id}`
    url.searchParams.append('include_adult', 'false')
    url.searchParams.append('append_to_response', 'videos,images,credits')
    url.searchParams.append('language', 'es-ES')
    url.searchParams.append('api_key', TMDB_API_KEY!)

    const response = await fetch(
        url,
        options
    );
    return response.json();
}

export { getDetails, baseImgPath }