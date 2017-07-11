import { combineReducers } from 'redux';
import mainReducer from './main_reducer';

const rootReducer = combineReducers({
  session: mainReducer,
});

export default rootReducer;
