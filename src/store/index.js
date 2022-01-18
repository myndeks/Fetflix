import { createStore, combineReducers } from "redux";
import content from '../content';
import auth from '../auth';

const rootReducer = combineReducers ({
  content: content.reducer,
  auth: auth.reducer
});

const store = createStore(rootReducer);

export default store;
