import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoinDetails } from '../redux/coinsDetails/coinsDetailsSlice';

const CoinsDetails = () => {
  const { id } = useParams();
  const { details, isLoading, errorMessage } = useSelector((state) => state.coinsDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinDetails(id));
  }, [dispatch, id]);

  return (
    <section className="details-section">
      {isLoading && <h2 style={{ color: '#fff', margin: 'auto' }}>Loading...</h2>}
      {errorMessage && <h2 style={{ color: '#fff', margin: 'auto' }}>{errorMessage}</h2>}
      <h3 className="coin-name">{`${details.name} - ${details.symbol}`}</h3>
      <div className="coin-details">
        <div className="coin">
          <table>
            <tr>
              <td>Price</td>
              <td>{parseFloat(details.priceUsd).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Market Cap</td>
              <td>
                {parseFloat(details.marketCapUsd).toFixed(2)}
                {' '}
                USD
              </td>
            </tr>
            <tr>
              <td>Volume 24Hr</td>
              <td>
                {parseFloat(details.volumeUsd24Hr).toFixed(2)}
                {' '}
                USD
              </td>
            </tr>
            <tr>
              <td>Percent Rate 24Hr</td>
              <td>
                {parseFloat(details.changePercent24Hr).toFixed(2)}
                {' '}
                USD
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                {parseFloat(details.priceUsd).toFixed(2)}
                {' '}
                USD
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CoinsDetails;
