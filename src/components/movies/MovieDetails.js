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
          country: result.Country,
          result: {...result}
        })
      }
    )
  }

    conditionallyRenderContent = () => {
      const movie = this.props.movie
      const state = this.state;
      console.log(state);
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

              {Object.keys(state.result).map(function(key){
                if(typeof state.result[key] != 'object'){
                  return (<p prop={key}><span style={{fontWeight: 'bolder'}}>{key}:</span> {state.result[key]}</p>)
                }
              })}
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
