import React, { Component } from 'react';
import MovieList from '../movies/MovieList';
import { connect } from 'react-redux';

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
    movies: state.movie.movies
  }
}

export default connect(mapStateToProps)(Dashboard);