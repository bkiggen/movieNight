export const createMovie = (movie) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATE_MOVIE', movie })
  }
}