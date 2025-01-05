import { createStore } from 'redux';
import rootReducer from './reducers/rootRedcuer';

const store = createStore(rootReducer);
export default store;