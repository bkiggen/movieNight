import React, { Component } from 'react'

class CreateMovie extends Component {
    state = {
        title: '',
        year: 0
    }

    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="year">Year</label>
                        <input id="year" onChange={this.handleChange}></input>
                    </div>
                    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Add Movie</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateMovie
