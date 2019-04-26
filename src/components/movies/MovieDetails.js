import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import frog from '../../assets/img/frog.png';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
    this.fetchData = this.fetchData.bind(this)
  }

  componentWillReceiveProps(nextProps){
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
          result: {...result}
        })
      }
    )
  }

    conditionallyRenderContent = () => {
      const movie = this.props.movie
      const state = this.state;
      if(this.state.isLoaded){
        return (
          <div>
            <h1>{movie.title}</h1>
            <p>Chosen by: {movie.chooser}</p>
            <p>Viewing Date: {moment.unix(movie.createdAt.seconds).format('dddd, MMMM Do, YYYY')}</p>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContent: 'space-around'}}>
              <div>
                <img src={`${this.state.image}`} alt='movie poster' style={{margin: '50px'}}/>
              </div>
              <div style={{width: '30%'}}>
                {Object.keys(state.result).map(function(key){
                  if(key === 'Website'){
                    return (<p prop={key} key={key}><span style={{fontWeight: 'bolder'}}>{key}:</span> <a href={state.result[key]}>{state.result[key]}</a></p>)
                  } else if(key !== 'Poster' && key !== 'imdbVotes' && key !== 'Response' && key !== 'Type' && key !== 'BoxOffice' && key !== 'imdbID' && typeof state.result[key] != 'object'){
                    return (<p prop={key} key={key}><span style={{fontWeight: 'bolder'}}>{key}:</span> {state.result[key]}</p>)
                  }
                  return ''
                })}
              </div>

            </div>
          </div>
        )
      } else {
        return (
          <div className="container center">
            <img src={frog} alt="frog" className='frog'/>
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
