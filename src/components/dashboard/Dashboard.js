import React, { Component } from 'react';
import MovieList from '../movies/MovieList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends Component{
  state = {
    filterValue: ''
  }
  handleChange = (e) => {
    this.setState({
      filterValue: e.target.value
    })
  }


  render(){
    const { movies } = this.props;
    return (
      <div className="dashboard container">
        <h1>Archive</h1>
        <input onChange={this.handleChange} placeholder='Filter by Chooser' style={{width: '200px'}}></input>
        <MovieList movies={movies} filterValue={this.state.filterValue}/>
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
