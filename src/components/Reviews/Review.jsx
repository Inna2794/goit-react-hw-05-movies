import { fetchMoviesReviews } from 'components/TmdbApiService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Article, Author } from './Review.styled';

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState();

  useEffect(() => {
    fetchMoviesReviews(movieId).then(res => setReview(res));
  }, [movieId]);

  if (!review) return;
  const { results } = review;
  if (results.length === 0)
    return <Article>We don't have any reviews for this movie</Article>;

  return (
    <ul>
      {results.map(el => (
        <Article key={el.id}>
          <Author>Author: {el.author}</Author>
          <p>{el.content}</p>
        </Article>
      ))}
    </ul>
  );
};

export default Review;
