import { combineReducers } from 'redux';
import items from './itemReducer';
import auth from './authReducer';


const rootReducer = combineReducers({
  items,
  auth
});

export default rootReducer;
