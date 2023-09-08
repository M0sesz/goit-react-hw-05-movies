import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import MovieList from 'components/MovieList/MovieList';

import { getMoviesByQuery } from 'js/API_requests/getMoviesByQuery';
import { searchParamKey } from 'js/consts';
import { useData } from 'js/useData/useData';
import ErrorPage from './ErrorPage';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey);
  const { data, isFetching, error, getData } = useData();

  const moviesList = data;

  useEffect(() => {
    getData(getMoviesByQuery(search));
  }, [getData, search]);

  const onSearch = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value.trim();
    if (!searchValue) return;
    setSearchParams({ [searchParamKey]: searchValue });
  };

  if (error?.message) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="container">
        <form onSubmit={onSearch} style={formStyles}>
          <input
            name="search"
            type="text"
            defaultValue={search || ''}
            style={inputStyles}
          />
          <button type="submit" style={buttonStyles}>
            Search
          </button>
        </form>
        <MovieList movies={moviesList} isFetching={isFetching} />
      </div>
    </>
  );
};

const formStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const inputStyles = {
  flex: 1,
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginRight: '10px',
};

const buttonStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default MoviesPage;
