import { fetchMoviesDetails } from 'components/TmdbApiService';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';

import {
  GoBackBtn,
  FilmWrap,
  DescriptionWrap,
  Title,
  PostTitle,
  Text,
  InfoWrap,
  Container,
  JumpLink,
} from './FilmDetails.styled';

const FilmDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref =
    location.state?.from ?? '/goit-react-hw-05-movies/movies';

  useEffect(() => {
    const responce = fetchMoviesDetails(movieId);
    responce.then(res => setMovieDetails(res));
  }, [movieId]);

  if (!movieDetails) return;

  const { poster_path, title, release_date, overview, genres, vote_average } =
    movieDetails;
  const processedGenres = genres.map(el => el.name).join(' ');

  return (
    <Container>
      <GoBackBtn to={backLinkHref}>
        <ImArrowLeft2 /> Back
      </GoBackBtn>
      <FilmWrap>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
          }
          alt=""
          width="350"
        />
        <DescriptionWrap>
          <Title>{` ${title} (${release_date.slice(0, 4)})`}</Title>
          <Text>{`User Score: ${Math.round(+vote_average * 10)} %`}</Text>
          <PostTitle>Overview</PostTitle>
          <Text>{overview}</Text>
          <PostTitle>Genres</PostTitle>
          <Text>{processedGenres}</Text>
        </DescriptionWrap>
      </FilmWrap>
      <InfoWrap>
        <PostTitle>Additional information</PostTitle>
        <JumpLink to="cast" state={{ from: backLinkHref }}>
          Cast
        </JumpLink>
        <JumpLink to="review" state={{ from: backLinkHref }}>
          Review
        </JumpLink>
      </InfoWrap>
      <Outlet />
    </Container>
  );
};

export default FilmDetails;
