import React from 'react';
import MovieSummary from './MovieSummary';

const MovieList = ({movies}) => {
  return (
    <div className="movieList section">
      {movies && movies.map(movie => {
        return (
          <MovieSummary movie={movie} key={movie.id}/>
        )
      })}
    </div>
  )
}

export default MovieList;