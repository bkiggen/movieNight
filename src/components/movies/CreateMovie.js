import React, { Component } from 'react';
import { createMovie } from '../../store/actions/movieActions';
import { connect } from 'react-redux';

class CreateMovie extends Component {
    state = {
        title: '',
        year: 0,
        chooser: ''
    }

    handleChange = (e) => {
      console.log(e.target.value);
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.createMovie(this.state);
      this.props.history.push('/');
    }

    render() {
        return (
            <div className="container" style={{marginTop: '150px'}}>
                <form onSubmit={this.handleSubmit} className="white" style={{width: '400px', margin: '0 auto'}}>
                    <h5 className="grey-text text-darken-3" style={{margin: '50px'}}>Add Movie to Archive:</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="year">Year</label>
                        <input id="year" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="chooser">Chooser</label>
                        <input id="chooser" onChange={this.handleChange}></input>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" style={{margin: '30px'}}>Add Movie</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMovie: (movie) => dispatch(createMovie(movie))
  }
}

export default connect(null, mapDispatchToProps)(CreateMovie)
