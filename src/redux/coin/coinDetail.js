const FETCH_COIN = 'FETCH_COIN';

export const coinFetchAction = (coin) => ({
  type: FETCH_COIN,
  coin,
});

export const fetchCoin = (url) => async (dispatch) => {
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache',
    },
  });
  const data = await response.json();
  dispatch(coinFetchAction(data));
};

const coin = (state = [], action) => {
  switch (action.type) {
    case FETCH_COIN:
      return action.coin;
    default:
      return state;
  }
};

export default coin;
