import React, { Component } from 'react';
import { updateNext } from '../../store/actions/movieActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


class Next extends Component {  
  state = {
      nextChooser: '',
      leftToChoose: ['Ben', 'Greg', 'Hannah', 'Andrew', 'Amanda', 'Brianna']
  }
  
  handleClick = () => {

    let nameArray = this.state.leftToChoose;
        
    let randomNumber = Math.floor(Math.random() * Math.floor(nameArray.length));
    let selectedChooser = nameArray.splice(randomNumber, 1);
    console.log(selectedChooser);
    
    this.setState((previousState, currentProps) => {
      return {
        ...previousState,
        leftToChoose: nameArray,
        nextChooser: selectedChooser
      }
    })
    this.props.updateNext({
      nextChooser: selectedChooser,
      leftToChoose: nameArray
    });
  }
  
  render() {
    const { nextChooser } = this.props;

    return (
      <div>
        <div className="card">
          <h1>Left to Choose: {this.state.leftToChoose}</h1>
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
    nextChooser:  state.firestore.ordered.nextChooser
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    updateNext: (chooser) => dispatch(updateNext(chooser))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'nextChooser' }
  ])
)(Next);

