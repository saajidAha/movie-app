import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_MOVIE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';

// create a reusable instance of the url with the api key configured
const tmdbApi = axios.create({
    baseURL: BASE_URL,
    headers:{
        Authorization: `Bearer ${API_KEY}`,
        accept: 'application/json',
    },
})

// Get movies based on if they are trending or popular
const getMovies = async(typeOfMovie: string) => {
    let path: string = '';
    typeOfMovie === 'popular' ? path = 'movie/popular' : path = 'trending/movie/week'
    try{
        const response = await tmdbApi.get(path);
        const moviesList = response.data.results;
        return moviesList;
    }catch(error){
        console.error('Error fetching movies data');
    }
}

// fetched the genrelist from the api
const getGenres = async() => {
    try{
        const response = await tmdbApi.get('genre/movie/list');
        return response.data.genres;
    }catch(error){
        console.error('Error fetching genres data');
    }
}

// get individual movie details based on the id
const getMovieDetails = async(movieId: string | string[]) => {
    try{
        const response = await tmdbApi.get(`/movie/${movieId}`);
        return response.data;
    }catch(error){
        console.error('Error fetching indiviudual movie datat')
    }
}

export {getMovies, getGenres, getMovieDetails, IMAGE_BASE_URL};