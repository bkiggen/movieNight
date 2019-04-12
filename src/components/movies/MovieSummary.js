import React from 'react';

const MovieSummary = ({movie}) => {
  return (

    <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <div>{movie.title}</div>
            <div>{movie.year}</div>
          </div>
      </div>
  )
}

export default MovieSummary;