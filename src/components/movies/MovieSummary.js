import React from 'react';
import reel from '../../assets/img/reel.png';

const MovieSummary = ({movie}) => {
  return (

    <div className="card  z-depth-0 movie-summary" style={{width: '300px', margin: '20px', height: '200px', background: `url(${reel})`, padding: '20px'}}>
      <div className="card-content white-text text-darken-3">
        <h5>{movie.title}</h5>
        <p><em>{movie.year}</em></p>
        <p>{movie.chooser}</p>
      </div>
    </div>
  )
}

export default MovieSummary;
