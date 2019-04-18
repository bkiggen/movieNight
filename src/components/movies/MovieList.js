import React from 'react';
import MovieSummary from './MovieSummary';
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {

  return (
    <div>
      <h1>Archive</h1>
      <div className="movieList section" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {movies && movies.map(movie => {
          return (
            <div>
              <Link to={'/movie/' + movie.id} key={movie.id}>
                <MovieSummary movie={movie} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MovieList;
