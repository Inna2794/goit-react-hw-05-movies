import { useLocation } from 'react-router-dom';
import { Element, FilmImage, FilmLink, List } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  if (!movies) {
    return <h3>Internal Server Error</h3>;
  }
  if (movies.length === 1) return;

  return (
    <List>
      {movies.map(el => (
        <Element key={el.id}>
          <FilmLink
            to={`/goit-react-hw-05-movies/movies/${el.id}`}
            state={{ from: location }}
          >
            <FilmImage
              src={
                el.poster_path
                  ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
              }
              alt=""
            />

            {el.title}
          </FilmLink>
        </Element>
      ))}
    </List>
  );
};

export default MovieList;
