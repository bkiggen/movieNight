const initState = {
  movies: [
        { id: '1', title: 'Wonder Boys', year: 1984  },
        { id: '2', title: 'Cool Hand Luke', year: 2003 },
        { id: '3', title: 'Gears and Steers', year: 1977 },
        { id: '4', title: 'Wonde', year: 1955  },
        { id: '5', title: 'Coo', year: 2322 },
        { id: '6', title: 'Gearss', year: 1232 }
    ]
}

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_MOVIE':
      console.log('create movie', action.movie);
      return state;
    case 'CREATE_MOVIE_ERROR':
      console.log('create movie error', action.err);
      return state;
    default:
      return state;
  }
};

export default movieReducer;