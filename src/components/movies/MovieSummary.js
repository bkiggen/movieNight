import React from 'react';

const MovieSummary = ({movie}) => {
  return (
    <div className="movie-summary">
      <div className="">
        <div>{movie.title}</div>
        <div>{movie.year}</div>
      </div>
    </div>
  )
}

export default MovieSummary;