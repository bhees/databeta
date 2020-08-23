import { combineReducers } from 'redux';
import articles from './articleReducer';
import authors from './authorReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  articles,
  authors,
  user
})

export default rootReducer;
