import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CoinsDetails from '../components/CoinsDetails';
import store from '../redux/store';
import '@testing-library/jest-dom';


test('renders Coins component with Redux Provider', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CoinsDetails />
    </Provider>,
  );
  const headerComponent = getByTestId('details-component');
  expect(headerComponent).toBeInTheDocument();
});
