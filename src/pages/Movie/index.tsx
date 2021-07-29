import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import api from '../../services/api';

import Header from '../../components/Header';
import Skeleton from '../../components/Skeleton';
import animationData from '../../assets/loading.json';

import {
  Container,
  Loader,
  Content,
  MovieImage,
  MovieInfo,
  MovieDetails,
  MovieRate,
  MovieGenre,
  Genres,
} from './styles';

interface GenreData {
  id: string;
  name: string;
}

interface MovieData {
  id: string;
  title: string;
  poster_path: string;
  genres: GenreData[];
  overview: string;
  vote_average: number;
}

const Movie: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [imageLoader, setImageLoader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieData>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getMovie = async () => {
      const response = await api.get(`/movie/${id}`);

      setMovie(response.data);
      setLoading(false);
    };

    getMovie();
  }, [id]);
  return (
    <Container>
      <Header />
      {loading && (
        <Loader>
          <Lottie options={defaultOptions} width={150} height={150} />
        </Loader>
      )}
      {movie && (
        <Content>
          <MovieImage
            loaded={imageLoader}
            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            alt={movie.title}
            onLoad={() => setImageLoader(true)}
          />
          {!imageLoader && <Skeleton width="30%" height="300px" />}
          <MovieInfo>
            <h2> {movie.title} </h2>
            <p>{movie.overview}</p>
            <MovieDetails>
              <MovieRate>
                <h3>Avaliação:</h3>
                <span>{movie.vote_average}</span>
              </MovieRate>
              <MovieGenre>
                <h3>Gênero:</h3>
                <Genres>
                  {movie.genres.map((genre, index) => (
                    <>{index < 5 && <li key={genre.id}>{genre.name}</li>}</>
                  ))}
                </Genres>
              </MovieGenre>
            </MovieDetails>
          </MovieInfo>
        </Content>
      )}
    </Container>
  );
};

export default Movie;
