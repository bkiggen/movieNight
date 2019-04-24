import React from 'react';
import { Link } from 'react-router-dom';

const NextChooserDetail = ({nextChooser}) => {

  return (
    <div>
    {console.log(nextChooser)}
    {nextChooser && nextChooser.map(nextChooser => {
      return (
        <div key={nextChooser.nextChooser}>
        </div>
      )
    })}
    </div>
  )
}

export default NextChooserDetail;
