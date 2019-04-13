import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const MovieDetails = props => {

  const { movie } = props;
  if(movie){
    return (
      <div className="container section movie-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{movie.title}</span>
            <p>Chosen by: {movie.chooser}</p>
          </div>
          <div className="card-action grey lighten-4">
            <p>Release Year: {movie.year}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading movie details...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const movies = state.firestore.data.movies;
  const movie = movies ? movies[id] : null;
  return {
    movie: movie
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'movies'}
  ])
)(MovieDetails);