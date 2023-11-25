import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Coins from '../components/Coins';
import store from '../redux/store';
import '@testing-library/jest-dom';


test('renders Coins component with Redux Provider', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Coins />
    </Provider>,
  );
  const headerComponent = getByTestId('coins-component');
  expect(headerComponent).toBeInTheDocument();
});
