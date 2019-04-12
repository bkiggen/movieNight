import movieReducer from './movieReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movie: movieReducer
});

export default rootReducer;