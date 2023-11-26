import React from 'react';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';
import '@testing-library/jest-dom';

test('renders Coins component with Redux Provider', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
