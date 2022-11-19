import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './coin/coin';

const allReducers = combineReducers({
  coins: bookReducer,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
