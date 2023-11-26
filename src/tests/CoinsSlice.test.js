import coinsReducer, { getCoins } from '../redux/coins/CoinsSlice'; // Replace with the path to your Redux file

const initialState = {
  coins: [],
  isLoading: false,
  errorMessage: '',
};

describe('coinsReducer', () => {
  it('should handle getCoins.pending', () => {
    const action = { type: getCoins.pending.type };
    const state = coinsReducer(initialState, action);
    expect(state.isLoading).toEqual(true);
  });

  it('should handle getCoins.fullfilled', () => {
    const action = { type: getCoins.fulfilled.type };
    const state = coinsReducer(initialState, action);
    expect(state.isLoading).toEqual(false);
  });

  it('should handle getCoins.rejected', () => {
    const mockError = 'Error fetching coins';
    const action = { type: getCoins.rejected.type, payload: mockError };
    const state = coinsReducer(initialState, action);
    expect(state.isLoading).toEqual(false);
    expect(state.errorMessage).toEqual(mockError);
  });
});
