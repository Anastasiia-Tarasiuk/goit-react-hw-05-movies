import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '1691901ed2ae3d246dfa1eabb74d344d';

const params = {
    api_key: API_KEY,
    language: 'en-US',
}

export const apiMovieSearch = async (searchQuery, page) => {
    const response = await axios(`search/movie`, {
        params: {
            ...params,
            query: searchQuery,
            page, 
        }
    });
    return response.data;
}

export const apiTrandingMovies = async () => {
    const response = await axios(`trending/all/day`, {
        params,
    });
    return response.data;
}

export const apiGetMovieInfoById = async (movie_id) => {
    const response = await axios(`movie/${movie_id}`, {
        params,
    });
    return response.data;
}

export const apiGetMovieCastById = async (movie_id) => {
    const response = await axios(`movie/${movie_id}/credits`, {
        params,
    });
    return response.data;
}

export const apiGetMovieReviewsById = async (movie_id) => {
    const response = await axios(`movie/${movie_id}/reviews`, {
        params,
    });
    return response.data;
}