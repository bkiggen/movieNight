import React, { Component } from 'react';
import { updateNext } from '../../store/actions/movieActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import frog from '../../assets/img/frog.png'

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
    this.props.history.push('/')
  }

  conditionallyRenderContent = () => {
    const movie = this.props.movie
    if(this.state.isLoaded){
      return (
        <div style={{marginTop: '150px'}}>
          <h5>Left to Choose:</h5>
          <div className="card" style={{maxWidth: '500px', display: 'flex', margin: '0 auto', justifyContent: 'space-around', marginBottom: '20px'}}>
             {this.state.leftToChoose.map(function(chooser){
              return (<p style={{listStyle: 'none'}}>{chooser}</p>)
            })}
          </div>

          <button type="button" onClick={this.handleClick}>Press!</button>

        </div>
      )
    } else {
      return (
        <div>
          <img src={frog} className='frog'/>
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



// <div className="card" style={{maxWidth: '500px', margin: '0 auto'}}>
//   <h1><span>{this.state.nextChooser}</span> is next!</h1>
// </div>
//
