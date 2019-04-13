import React from 'react';
import MovieSummary from './MovieSummary';
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {
  return (
    <div className="movieList section">
      {movies && movies.map(movie => {
        return (
          <Link to={'/movie/' + movie.id} key={movie.id}>
            <MovieSummary movie={movie} />
          </Link>
        )
      })}
    </div>
  )
}

export default MovieList;