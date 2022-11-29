import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore'
import Navbar from '../components/navbar'

describe('Navbar component testing', () => {
  test('Does the Navbar component match snapshot', () => {
    const home = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(home).toMatchSnapshot();
  });

  test('navbar should have a heading of "Cryptocurrency Hub"', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Cryptocurrency Hub');
  });
});
