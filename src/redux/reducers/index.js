import { combineReducers } from 'redux';
import articles from './articleReducer';
import authors from './authorReducer';
import user from './userReducer';
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  articles,
  authors,
  user,
  apiCallsInProgress
})

export default rootReducer;
