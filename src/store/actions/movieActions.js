export const createMovie = (movie) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('movies').add({
      ...movie,
      createdAt: new Date()
    }).then(()=> {
      dispatch({ type: 'CREATE_MOVIE', movie });
    }).catch((err)=> {
      dispatch({ type: 'CREATE_MOVIE_ERROR', err})
    })
  }
};

export const updateNext = (chooser) => {
  console.log(chooser);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log(chooser);
    firestore.collection('nextChooser').doc('fPDChgaiSVrAnr9s4boD').set({
      nextChooser: chooser.nextChooser,
      leftToChoose: chooser.leftToChoose
    })
  }
}