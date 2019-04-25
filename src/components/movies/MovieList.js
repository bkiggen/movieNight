import React from 'react';
import MovieSummary from './MovieSummary';
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {
  const movieListStyle = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'};

  return (
    <div>

      <div className="movieList section" style={movieListStyle}>
        {console.log(movies)}
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
