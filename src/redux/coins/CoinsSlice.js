import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  coins: [],
  isLoading: false,
  errorMessage: '',
};
const URL = 'https://api.coincap.io/v2/assets';

export const getCoins = createAsyncThunk('coinsGenere/getCoins', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error;
  }
});
const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.coins = data;
      })
      .addCase(getCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default coinsSlice.reducer;
