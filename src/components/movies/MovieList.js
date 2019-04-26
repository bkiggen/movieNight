import React from 'react';
import MovieSummary from './MovieSummary';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
  
  const movieListStyle = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'};
  const {movies} = props;
  const filterValue = props.filterValue;

  return (
    <div>
      <div className="movieList section" style={movieListStyle}>
        {movies && movies.map(movie => {
          if(filterValue){
            if(movie['chooser'].toLowerCase() === filterValue.toLowerCase()){
              return (
                <div key={movie.id}>
                  <Link to={'/movie/' + movie.id} key={movie.id}>
                    <MovieSummary movie={movie} />
                  </Link>
                </div>
              )
            }
          } else {
            return (
              <div key={movie.id}>
                <Link to={'/movie/' + movie.id} key={movie.id}>
                  <MovieSummary movie={movie} />
                </Link>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default MovieList;
