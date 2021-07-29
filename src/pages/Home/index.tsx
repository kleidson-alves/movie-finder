import React, { useCallback, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { FiSearch } from 'react-icons/fi';

import { Container, SearchArea, Search, Loader, MovieSection } from './styles';
import animationData from '../../assets/loading.json';

import api from '../../services/api';
import MovieCard from '../../components/MovieCard';
import Header from '../../components/Header';
import { useToast } from '../../hooks/toast';

interface MovieData {
  id: string;
  title: string;
  poster_path: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>();
  const [movieSearched, setMovieSearched] = useState();
  const [time, setTime] = useState<NodeJS.Timeout>();
  const [loading, setLoading] = useState(true);

  const { addToast } = useToast();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleSearchMovie = useCallback(async () => {
    setLoading(true);
    if (time) clearTimeout(time);
    try {
      const response = await api.get(`/search/movie?query=${movieSearched}`);
      if (response.data.results.length === 0) {
        throw new Error();
      }
      setMovies(response.data.results);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao carregar filmes',
        description:
          'Não foram encontrados filmes relacionados ao nome indicado',
      });
    } finally {
      setLoading(false);
    }
  }, [addToast, movieSearched, time]);

  const handleChangeInput = useCallback(
    e => {
      if (time) clearTimeout(time);
      setTime(
        setTimeout(async () => {
          await handleSearchMovie();
        }, 2000),
      );
      setMovieSearched(e.target.value);
    },
    [time, handleSearchMovie],
  );

  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get('/movie/popular');

      setMovies(response.data.results);
    };
    getMovies();
    setLoading(false);
  }, []);

  return (
    <Container>
      <Header />
      <SearchArea>
        <h2>Seja bem-vindo(a) ao MovieFinder</h2>
        <h3>Encontre o filme que você procura</h3>
        <Search>
          <input
            type="text"
            placeholder="Nome do filme"
            onChange={handleChangeInput}
          />
          <button type="submit" onClick={handleSearchMovie}>
            <FiSearch />
          </button>
        </Search>
      </SearchArea>
      {loading ? (
        <Loader>
          <Lottie options={defaultOptions} width={150} height={150} />
        </Loader>
      ) : (
        <MovieSection>
          {movies &&
            movies.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            ))}
        </MovieSection>
      )}
    </Container>
  );
};

export default Home;
