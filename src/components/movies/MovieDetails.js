import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import MovieQuery from '../movies/MovieQuery';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      image: '', 
      title: ''
    };
    this.fetchData = this.fetchData.bind(this)
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.movie.title);
    this.fetchData(nextProps.movie);
    
  }
  
  fetchData(movie){
    fetch(`https://www.omdbapi.com/?t=${movie.title}&y=${movie.year}&apikey=102a2cf2`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          image: result.Poster,
          title: result.Title
        })
      }
    )
  }

    conditionallyRenderContent = () => {
      const movie = this.props.movie
      if(this.state.isLoaded){
        return (
          <div className="container section movie-details">
          <div className="card z-depth-0">
          <div className="card-content">
          <span className="card-title">{this.state.title}</span>
          <p>Chosen by: {movie.chooser}</p>
          <p>Viewing Date: {movie.createdAt.seconds}</p>
          </div>
          <img src={`${this.state.image}`} />
          <div className="card-action grey lighten-4">
          <p>Release Year: {movie.year}</p>
          <Link to="/">Home</Link>
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
