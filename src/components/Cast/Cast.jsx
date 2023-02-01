import { fetchMoviesCredits } from '../TmdbApiService';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList, Name, Role } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [{ cast }, setCastInfo] = useState([]);

  useEffect(() => {
    fetchMoviesCredits(movieId).then(res => setCastInfo(res));
  }, [movieId]);

  if (!cast) return;

  return (
    <CastList>
      {cast.map(el => (
        <li key={el.id}>
          <img
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            }
            alt={el.name}
            width="200"
            height="300"
          />
          <Name>
            Name: <Role>{el.name}</Role>
          </Name>
          <Name>
            Character: <Role>{el.character}</Role>
          </Name>
        </li>
      ))}
    </CastList>
  );
};

export default Cast;
