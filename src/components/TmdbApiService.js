import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = 'ec34284630374f864ce40bf102f3f73e';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  try {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    Notiflix.Loading.standard();
    const trendingData = await axios.get(url);
    Notiflix.Loading.remove();
    return trendingData.data.results;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
}

export async function fetchSearchMovie(searchQuery) {
  if (searchQuery === '') return;
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
    const searchingData = await axios.get(url);
    return searchingData.data.results;
  } catch (error) {
    console.log(error);
    Notiflix.failure('Oops, an error occurred');
  }
}

export const fetchMoviesDetails = async id => {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    Notiflix.Loading.standard();
    const details = await axios.get(url);
    Notiflix.Loading.remove();
    return details.data;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
};

export async function fetchMoviesCredits(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    Notiflix.Loading.standard();
    const details = await axios.get(url);
    Notiflix.Loading.remove();
    return details.data;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
}

export async function fetchMoviesReviews(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
    Notiflix.Loading.standard();
    const details = await axios.get(url);
    Notiflix.Loading.remove();
    return details.data;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
}
