import { Component } from 'react';

class MovieQuery extends Component {
  movieQuery(title, year){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://www.omdbapi.com/?t=${title}&y=${year}&apikey=102a2cf2`;
      request.onload = function() {
        if (this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export default MovieQuery
