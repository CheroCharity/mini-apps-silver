import { combineReducers } from 'redux';
import fetchReducer from './fetchReducers';
import editReducer from './editReducers';
import addReducer from './addReducers';

const rootReducer = combineReducers({
    items: fetchReducer, 
    editItems: editReducer,
    addItems: addReducer,
  });
  export default rootReducer;