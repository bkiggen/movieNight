import React, { Component } from 'react';

class Next extends Component {
  state = {
    peopleLeft: [ 'Ben', 'Hannah', 'Greg', 'Andrew', 'Brianna', 'Amanda'],
    selectedPerson: ''
  }
  
  handleClick = () => {
    let nameArray = this.state.peopleLeft;
    let randomNumber = Math.floor(Math.random() * Math.floor(nameArray.length));
    let selectedPerson = nameArray.splice(randomNumber, 1);
    if (nameArray.length < 1){
      nameArray = [ 'Ben', 'Hannah', 'Greg', 'Andrew', 'Brianna', 'Amanda']
    }
    this.setState({
      peopleLeft: nameArray,
      selectedPerson: selectedPerson
    })
  }
  
  render() {
    return (
    <div>
      <div class="card">
        <h1>Left to Choose:</h1>
        {this.state.peopleLeft && this.state.peopleLeft.map(person => {
          return (
            <span>| {person} |</span>
          )
        })}
      </div>
      <button type="button" onClick={this.handleClick}>Press!</button>
      <div class="card">
        <h1><span>{this.state.selectedPerson}</span> is next!</h1>
      </div>
    </div>
    )
  }
  
}

export default Next;