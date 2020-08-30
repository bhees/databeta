import { combineReducers } from 'redux';
import articles from './articleReducer';
import authors from './authorReducer';
import user from './userReducer';
import apiCallsInProgress from "./apiStatusReducer";
import contactForm from './contactReducer';

const rootReducer = combineReducers({
  articles,
  authors,
  user,
  apiCallsInProgress,
  contactForm
})

export default rootReducer;
