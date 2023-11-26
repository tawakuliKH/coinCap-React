import coinsDetailsReducer, { getCoinDetails } from '../redux/coinsDetails/coinsDetailsSlice'; // Replace with the path to your Redux file

const initialState = {
  coins: [],
  isLoading: false,
  errorMessage: '',
};

describe('coinsReducer', () => {
  it('should handle getCoins.pending', () => {
    const action = { type: getCoinDetails.pending.type };
    const state = coinsDetailsReducer(initialState, action);
    expect(state.isLoading).toEqual(true);
  });

  it('should handle getCoins.fullfilled', () => {
    const action = { type: getCoinDetails.fulfilled.type };
    const state = coinsDetailsReducer(initialState, action);
    expect(state.isLoading).toEqual(false);
  });

  it('should handle getCoins.rejected', () => {
    const mockError = 'Error fetching coins';
    const action = { type: getCoinDetails.rejected.type, payload: mockError };
    const state = coinsDetailsReducer(initialState, action);
    expect(state.isLoading).toEqual(false);
    expect(state.errorMessage).toEqual(mockError);
  });
});
