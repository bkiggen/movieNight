import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import MovieQuery from '../movies/MovieQuery';

class MovieDetails extends Component {

  componentDidUpdate(){
    const movie = this.props.movie
    let movieQuery = new MovieQuery();
    console.log(movie);
    let promise = movieQuery.movieQuery(movie.title, movie.year);
    promise.then(function(response){
      let body = JSON.parse(response);
      console.log(body);
    })
  }
    conditionallyRenderContent = () => {
      const movie = this.props.movie
      if(movie){
        return (
          <div className="container section movie-details">
          <div className="card z-depth-0">
          <div className="card-content">
          <span className="card-title">{movie.title}</span>
          <p>Chosen by: {movie.chooser}</p>
          <p>Viewing Date: {movie.createdAt.seconds}</p>
          </div>
          <div className="card-action grey lighten-4">
          <p>Release Year: {movie.year}</p>
          <Link to="/">Home</Link>
          </div>
          </div>
          <h1>API RESPONSE:</h1>
          <div>
          
          
          
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
    render(){
      return(
        <div>
          {this.conditionallyRenderContent()}
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
