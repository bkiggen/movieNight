import movieReducer from './movieReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  movie: movieReducer,
  firestore: firestoreReducer
});

export default rootReducer;