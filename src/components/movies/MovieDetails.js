import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import MovieQuery from '../movies/MovieQuery';
import moment from 'moment';
import frog from '../../assets/img/frog.png'
import tv from '../../assets/img/tv.png'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      image: '',
      title: '',
      director: '',
      genre: '',
      runtime: '',
      writer: '',
      rated: '',
      actors: '',
      plot: '',
      country: ''
    };
    this.fetchData = this.fetchData.bind(this)
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.movie);
    this.fetchData(nextProps.movie);
  }

  fetchData(movie){
    fetch(`https://www.omdbapi.com/?t=${movie.title}&y=${movie.year}&apikey=102a2cf2`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          image: result.Poster,
          title: result.Title,
          director: result.Director,
          genre: result.Genre,
          runtime: result.Runtime,
          writer: result.Writer,
          rated: result.Rated,
          actors: result.Actors,
          plot: result.Plot,
          country: result.Country
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
              <h1>{this.state.title}</h1>
              <p>Chosen by: {movie.chooser}</p>
              <p>Viewing Date: {moment.unix(movie.createdAt.seconds).format('dddd, MMMM Do, YYYY')}</p>
              </div>
              <img src={`${this.state.image}`} style={{marginBottom: '20px'}}/>
              <div className="card-action grey lighten-4">
              <p><strong>Release Year: </strong>{movie.year}</p>
              <p><strong>Director: </strong> {this.state.director}</p>
              <p><strong>Actors: </strong> {this.state.actors}</p>
              <p><strong>Genre: </strong>{this.state.genre}</p>
              <p><strong>Runtime: </strong> {this.state.runtime}</p>
              <p><strong>Writer(s): </strong> {this.state.writer}</p>
              <p><strong>Rated: </strong>{this.state.rated}</p>
              <p><strong>Plot Summary: </strong> {this.state.plot}</p>
              <p><strong>Country: </strong> {this.state.country}</p>

              <Link to="/">Home</Link>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="container center">
            <img src={frog} className='frog'/>
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
