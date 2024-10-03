import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
  loading: loadingReducer,
});

export default rootReducer;
