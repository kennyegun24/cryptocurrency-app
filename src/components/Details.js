/* eslint-disable */
import { useLocation, useParams } from 'react-router-dom';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import ReactDOM from 'react-dom';
import { fetchCoin } from '../redux/coin/coinDetail';

const Details = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coin);
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    dispatch(fetchCoin(url));
  }, [params.coinId]);

  return ReactDOM.createPortal(
    <>
      {coins.id === params.coinId ? (
        <div>
          <div className="coin-container">
            <div className="content">
              <h1>{coins.name}</h1>
            </div>
            <div className="content">
              <div className="rank">
                <span className="rank-btn">Rank #{coins.market_cap_rank}</span>
              </div>
              <div className="info">
                <div className="coin-heading">
                  {coins.image ? <img src={coins.image.small} alt="" /> : null}
                  {coins.symbol ? (
                    <p>
                      {coins.symbol.toUpperCase()}
                      /USD
                    </p>
                  ) : null}
                </div>
                <div className="coin-price">
                  {coins.market_data?.current_price ? (
                    <h1>
                      ${coins.market_data.current_price.usd.toLocaleString()}
                    </h1>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="content">
              <table>
                <thead>
                  <tr>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>14d</th>
                    <th>30d</th>
                    <th>1yr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {coins.market_data
                        ?.price_change_percentage_1h_in_currency ? (
                        <p>
                          {coins.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coins.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coins.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coins.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coins.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coins.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coins.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coins.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coins.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coins.market_data.price_change_percentage_1y ? (
                        <p>{coins.market_data.price_change_percentage_1y}</p>
                      ) : (
                        <p>#</p>
                      )}

                      {/* <p>{oneYearData}</p> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content">
              <div className="stats">
                <div className="left">
                  <div className="row">
                    <h4>24 Hour Low</h4>
                    {coins.market_data?.low_24h ? (
                      <p>${coins.market_data.low_24h.usd.toLocaleString()}</p>
                    ) : null}
                  </div>
                  <div className="row">
                    <h4>24 Hour High</h4>
                    {coins.market_data?.high_24h ? (
                      <p>${coins.market_data.high_24h.usd.toLocaleString()}</p>
                    ) : null}{' '}
                  </div>
                </div>
                <div className="right">
                  <div className="row">
                    <h4>Market Cap</h4>
                    {coins.market_data?.market_cap ? (
                      <p>${coins.market_data.market_cap.usd.toLocaleString()}</p>
                    ) : null}
                  </div>
                  <div className="row">
                    <h4>Circulating Supply</h4>
                    {coins.market_data ? (
                      <p>{coins.market_data.circulating_supply}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="content">
              <div className="about">
                <h3>About</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      coins.description ? coins.description.en : '',
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>hey</p>
      )}
    </>,
    document.getElementById('portal-root'),
  );
};


export default Details;

{/* <div>
<div className="imgDtDv">
  <img className="imgDt" src={coins.image} alt="img" />        
</div>
<div className="detailPage">
  <span>
    {` ${coins.name}`}
  </span>
  <span>
    {` ${coins.symbol.toUpperCase()}`}
  </span>
  <span>
    market cap:
    {` ${Number(coins.market_cap).toLocaleString('en-US')}`}
  </span>
  <span>
    price:
    {` ${Number(coins.current_price).toLocaleString('en-US')}`}
  </span>
  <span>
    ATH:
    {` ${coins.ath.toLocaleString()}`}
  </span>
  {total()}
  <span>
    Circulating Supply:
    {` ${coins.circulating_supply.toLocaleString()}`}
  </span>
  <span>
    Total Volume:
    {` ${coins.total_volume.toLocaleString()}`}
  </span>
  <span>
    Cap Rank:
    {` ${coins.market_cap_rank.toLocaleString()}`}
  </span>
  <span>
    High 24hr:
    {` ${coins.high_24h.toLocaleString()}`}
  </span>
  <span>
    Low 24hr:
    {` ${coins.low_24h.toLocaleString()}`}
  </span>
  <span>
    Price Change 24hr:
    {` ${coins.price_change_24h.toLocaleString()}`}
  </span>
  <p>
  dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          coins.description ? coins.description.en : '',
        ),
      }}
  </p>
</div>
</div> */}