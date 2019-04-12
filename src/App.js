import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import MovieDetails from './components/movies/MovieDetails';
import CreateMovie from './components/movies/CreateMovie';
import Next from './components/next/Next';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/create" component={CreateMovie} />
              <Route exact path="/next" component={Next} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
