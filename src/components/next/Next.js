import React, { Component } from 'react';
import { updateNext } from '../../store/actions/movieActions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Next extends Component {
  state = {
    leftToChoose: [],
    nextChooser: ''
  }
  
  handleClick = () => {
    let nameArray = this.state.leftToChoose;
    let randomNumber = Math.floor(Math.random() * Math.floor(nameArray.length));
    let selectedChooser = nameArray.splice(randomNumber, 1);
    if (nameArray.length < 1){
      nameArray = [ 'Ben', 'Hannah', 'Greg', 'Andrew', 'Brianna', 'Amanda']
    }

    this.setState((previousState, currentProps) => {
      return {
        ...previousState,
        leftToChoose: nameArray,
        nextChooser: selectedChooser
      }
    })
    console.log(this.state);

    this.props.updateNext(this.state);
  }
  
  render() {
    return (
    <div>
      <div className="card">
        <h1>Left to Choose:</h1>
        {this.state.leftToChoose && this.state.leftToChoose.map(chooser => {
          return (
            <span key={chooser}> | {chooser} | </span>
          )
        })}
      </div>
      <button type="button" onClick={this.handleClick}>Press!</button>
      <div className="card">
        <h1><span>{this.state.nextChooser}</span> is next!</h1>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    leftToChoose: state.firestore.nextChooser.leftToChoose,
    nextChooser: state.firebase.nextChooser.nextChooser 
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateNext: (chooser) => dispatch(updateNext(chooser))
  }
}

export default connect(null, mapDispatchToProps)(Next);