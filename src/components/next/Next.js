import React, { Component } from 'react';
import { updateNext } from '../../store/actions/movieActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


class Next extends Component {  
  state = {
      nextChooser: '',
      leftToChoose: [],
      isLoaded: false, 
  }
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps.nextChooser[0].leftToChoose);
    this.setState({
      isLoaded: true,
      leftToChoose: nextProps.nextChooser[0].leftToChoose,
      nextChooser: nextProps.nextChooser[0].nextChooser
    })
  }
  
  handleClick = () => {
    let nameArray = this.state.leftToChoose.slice();
    let randomNumber = Math.floor(Math.random() * nameArray.length);
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
  
  conditionallyRenderContent = () => {
    const movie = this.props.movie
    if(this.state.isLoaded){
      return (
        <div>
          <div className="card">
            <h5>Left to Choose:</h5> {this.state.leftToChoose.map(function(chooser){
              return (<li style={{listStyle: 'none'}}>{chooser}</li>)
            })}
          </div>
  
          <button type="button" onClick={this.handleClick}>Press!</button>
          <div className="card">
            <h1><span>{this.state.nextChooser}</span> is next!</h1>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container center">
        <p>Loading chooser details...</p>
        </div>
      )
    }
  }
  
  
  render() {
    const { nextChooser } = this.props;

    return (
      <div>
        {this.conditionallyRenderContent()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state);
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

