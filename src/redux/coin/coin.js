import { createAsyncThunk } from '@reduxjs/toolkit';

// ACTIONS
const Get_COINS = 'bookstore/src/redux/Get_COINS';

// DEFAULT BOOKS

const displayCoins = [];
// REDUCERS
const bookReducer = (state = displayCoins, action) => {
  switch (action.type) {
    case Get_COINS:
      return action.unique;
    default:
      return state;
  }
};

// ACTIONS CREATORS

const fetchCoins = createAsyncThunk(Get_COINS, async (pos, { dispatch }) => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
  const data = await response.json();
  const coins = data.map((key) => ({
    id: key,
  }))
  console.log(data)
  dispatch({
    type: Get_COINS,
    unique: coins,
  });
});

export default bookReducer;
export { fetchCoins };
