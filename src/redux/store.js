import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coinsSlice from './coins/CoinsSlice';
import coinsDetailsSlice from './coinsDetails/coinsDetailsSlice';

const store = configureStore({
  reducer: {
    coins: coinsSlice,
    coinsDetails: coinsDetailsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
