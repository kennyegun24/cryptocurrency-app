import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../components/Details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      id: 'binance-coin',
      rank: '5',
      symbol: 'BNB',
      name: 'BNB',
      total_supply: '166801148.0000000000000000',
      ath: '732957.00000',
      price_change_24h: '',
      low_24h: '222',
      high_24h: '5555',
      market_cap_rank: '4838',
      circulating_supply: 'asdjds',
      total_volume: '38434343',

    },
  }),
}));

test('Check if details page renders correctly', () => {
  const tree = render(
    <Router>
      <Details />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
