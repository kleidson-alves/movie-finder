import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Skeleton from '../Skeleton';

import { Container, MovieImage, MovieInfo } from './styles';

interface MovieCardProps {
  id: string;
  title: string;
  poster_path: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, poster_path }) => {
  const [imageLoader, setImageLoader] = useState(false);

  const history = useHistory();

  const handleSelectMovie = useCallback(() => {
    history.push(`/movie/${id}`);
  }, [history, id]);

  return (
    <Container onClick={handleSelectMovie}>
      <MovieImage
        loaded={imageLoader}
        src={`https://image.tmdb.org/t/p/w780${poster_path}`}
        alt={title}
        onLoad={() => setImageLoader(true)}
      />
      {!imageLoader && <Skeleton width="100%" height="75%" />}
      <MovieInfo>
        <h3>{title}</h3>
      </MovieInfo>
    </Container>
  );
};

export default MovieCard;
