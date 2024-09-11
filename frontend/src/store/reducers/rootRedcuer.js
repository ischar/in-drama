import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
});

export default rootReducer;