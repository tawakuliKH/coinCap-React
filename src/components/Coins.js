import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoins } from '../redux/coins/CoinsSlice';

const Coins = () => {
  const { coins, isLoading, errorMessage } = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) => coin.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <section className="coin-section">
      <div className="coin-topic">
        <h2>Cryptocurrency Market</h2>
        <p>
          (
          {filteredCoins.length}
          {' '}
          Famouse Crypto Coins)
        </p>
        <div className="search-bar-container">
          <input type="text" placeholder="Search" className="search-bar" value={searchText} onChange={handleSearch} />
        </div>
      </div>
      {isLoading && <h2 style={{ color: '#fff', margin: 'auto' }}>Loading...</h2>}
      {errorMessage && <h2 style={{ color: '#fff', margin: 'auto' }}>{errorMessage}</h2>}

      <div className="card-container">
        {filteredCoins.map((coin) => (
          <Link to={`/details/${coin.id}`} key={coin.id} className="coin-card">
            <div>
              <h3>{coin.name}</h3>
              <p>
                {parseFloat(coin.priceUsd).toFixed(2)}
                {' '}
                USD
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Coins;
