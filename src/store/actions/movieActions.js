export const createMovie = (movie) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('movies').add({
      ...movie,
      title: "Ben Hur",
      year: 1984,
      createdAt: new Date(), 
      chooser: 'Ben'
    }).then(()=> {
      dispatch({ type: 'CREATE_MOVIE', movie });
    }).catch((err)=> {
      dispatch({ type: 'CREATE_MOVIE_ERROR', err})
    })
  }
};