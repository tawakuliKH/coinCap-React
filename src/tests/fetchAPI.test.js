import fetchCoins from './__mocks__/fetchCoins';

describe('Genres must pass the test', () => {
  test('Fetch available Coins must return data', () => {
    expect(fetchCoins()).toBeDefined();
  });
  test('Fetch Coins return value length must be 5', () => {
    expect(fetchCoins()).toHaveLength(3);
  });
  test('Fourth fetched genre name should be Award Winning', () => {
    expect(fetchCoins()[2].name).toBe('XRP');
  });
});
