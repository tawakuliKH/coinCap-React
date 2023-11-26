import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  details: [],
  coinId: 0,
  isLoading: false,
  errorMessage: '',
};

const URL = 'https://api.coincap.io/v2/assets/';

export const getCoinDetails = createAsyncThunk('coinDetails/getCoinDetails', async (coinId) => {
  try {
    const response = await axios.get(URL + coinId);
    return response.data;
  } catch (error) {
    return error;
  }
});

const coinsDetailsSlice = createSlice({
  name: 'coinsDetails',
  initialState,
  reducers: {
    setGenreId: (state, action) => {
      state.coinId = action.payload;
    },
    clearSlice: (state) => {
      state.details = [];
      state.isLoading = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoinDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoinDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.details = data;
      })
      .addCase(getCoinDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { setGenreId, clearSlice } = coinsDetailsSlice.actions;
export default coinsDetailsSlice.reducer;
