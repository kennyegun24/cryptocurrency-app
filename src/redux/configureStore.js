import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coinsSlice from './coin/coin';
import coin from './coin/coinDetail';

const allReducers = combineReducers({
  coins: coinsSlice,
  coin,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
