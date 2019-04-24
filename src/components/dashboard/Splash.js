import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import NextChooserDetail from '../next/NextChooserDetail';


class Splash extends Component{

  render(){
    const { nextChooser } = this.props;

    return (
      <div className="dashboard container">
        <NextChooserDetail nextChooser={nextChooser} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {

  return {
    movies: state.firestore.ordered.nextChooser
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'nextChooser', orderBy: ['nextChooser', 'desc'] }
  ])
)(Splash);
