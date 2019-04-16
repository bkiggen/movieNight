import React, { Component } from 'react';
import MovieList from '../movies/MovieList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends Component{

  
  render(){
    const { movies } = this.props;
    
    return (
      <div className="dashboard container">
        <MovieList movies={movies}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    movies: state.firestore.ordered.movies
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'movies', orderBy: ['year', 'desc'] }
  ])
)(Dashboard);