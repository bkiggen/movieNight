import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import frog from '../../assets/img/frog.png'

class Splash extends Component{
  state = {
    nextChooser: '',
    isLoaded: false
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({
      isLoaded: true,
      nextChooser: nextProps.nextChooser[0].nextChooser
    })
  }

  conditionallyRenderContent = () => {
    const nextChooser = this.state.nextChooser;
    if(this.state.isLoaded){
      return (
        <h1>{this.state.nextChooser}&#39;s pick</h1>
      )
    } else {
      return (
        <img src={frog} className='frog'/>
      )
    }
  }

  render(){
    const { nextChooser } = this.state.nextChooser;

    return (
      <div className="dashboard container" style={{marginTop: '150px'}}>
        <h4>Coming soon...</h4>
        {this.conditionallyRenderContent()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {

  return {
    nextChooser: state.firestore.ordered.nextChooser
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'nextChooser' }
  ])
)(Splash);
