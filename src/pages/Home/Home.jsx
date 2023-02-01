import { fetchTrendingMovies } from 'components/TmdbApiService';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const responce = fetchTrendingMovies();
    responce.then(res => setMovieList(res));
  }, []);

  return <MovieList movies={movieList} state={{ from: location }} />;
};

export default Home;
