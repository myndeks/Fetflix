import { createStore, combineReducers } from "redux";
import content from '../content';

const rootReducer = combineReducers ({
  content: content.reducer,
});

const store = createStore(rootReducer);

export default store;
