import bookReducer from "./coin/coin";
import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
  coins: bookReducer,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;