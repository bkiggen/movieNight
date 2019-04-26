import React from 'react';
import reel from '../../assets/img/reel.png';
import tv from '../../assets/img/tv.png';

const MovieSummary = ({movie}) => {
  const cardStyles = {width: '290px', margin: '20px', height: '325px', background: `url(${tv})`, backgroundPosition: 'center', backgroundSize: 'contain', padding: '20px'}
  const innerStyles = { marginTop: '100px', width: '190px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}
  return (

    <div className="card  z-depth-0 movie-summary" style={cardStyles}>
      <div className="card-content white-text text-darken-3" style={innerStyles}>
        <p style={{fontSize: '130%', color: 'brown', width: '100%'}}>{movie.title}</p>
        <p style={{fontSize: '1em', color: '#9D9D9C', fontStyle:'italic'}}>{movie.year}</p>
      </div>
    </div>
  )
}

export default MovieSummary;
