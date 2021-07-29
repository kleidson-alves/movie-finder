import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import { Container, Loader, Carousel, MovieSection } from './styles';

import api from '../../services/api';
import MovieCard from '../../components/MovieCard';
import Header from '../../components/Header';
import animationData from '../../assets/loading.json';

interface MovieData {
  id: string;
  title: string;
  poster_path: string;
}

const Movies: React.FC = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<MovieData[]>();
  const [popularMovies, setPopularMovies] = useState<MovieData[]>();
  const [upcomingMovies, setUpcomingMovies] = useState<MovieData[]>();

  const [loadingTopRatedMovies, setLoadingTopRatedMovies] = useState(true);
  const [loadingPopularMovies, setLoadingPopularMovies] = useState(true);
  const [loadingUpcomingMovies, setLoadingUpcomingMovies] = useState(true);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get('/movie/top_rated');

      setTopRatedMovies(response.data.results);
      setLoadingTopRatedMovies(false);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get('/movie/popular');

      setPopularMovies(response.data.results);
      setLoadingPopularMovies(false);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get('/movie/upcoming');

      setUpcomingMovies(response.data.results);
      setLoadingUpcomingMovies(false);
    };
    getMovies();
  }, []);

  return (
    <Container>
      <Header />

      <MovieSection>
        <h2>Lançamentos</h2>
        {loadingUpcomingMovies && (
          <Loader>
            <Lottie options={defaultOptions} width={150} height={150} />
          </Loader>
        )}
        {upcomingMovies && (
          <Carousel {...settings}>
            {upcomingMovies.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            ))}
          </Carousel>
        )}
      </MovieSection>

      <MovieSection>
        <h2>Mais populares</h2>
        {loadingPopularMovies && (
          <Loader>
            <Lottie options={defaultOptions} width={150} height={150} />
          </Loader>
        )}
        {popularMovies && (
          <Carousel {...settings}>
            {popularMovies.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            ))}
          </Carousel>
        )}
      </MovieSection>
      <MovieSection>
        <h2>Mais votados</h2>
        {loadingTopRatedMovies && (
          <Loader>
            <Lottie options={defaultOptions} width={150} height={150} />
          </Loader>
        )}
        {topRatedMovies && (
          <Carousel {...settings}>
            {topRatedMovies.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            ))}
          </Carousel>
        )}
      </MovieSection>
    </Container>
  );
};

export default Movies;
