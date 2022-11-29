import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coinsSlice from './coin/coin';

const allReducers = combineReducers({
  coins: coinsSlice,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
