import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';
import '@testing-library/jest-dom';


test('renders Coins component with Redux Provider', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const headerComponent = getByTestId('app-component');
  expect(headerComponent).toBeInTheDocument();
});
