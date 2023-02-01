import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox';
import { fetchSearchMovie } from 'components/TmdbApiService';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([{}]);
  const searchQuery = searchParams.get('query');

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target[0].value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!searchQuery) return;
    const responce = fetchSearchMovie(searchQuery);
    responce.then(res => setMovieList(res));
  }, [searchQuery]);

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      <MovieList movies={movieList} />
    </>
  );
};
export default Movies;
