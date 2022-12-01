/* eslint-disable */
import { useLocation } from 'react-router-dom';
import React from 'react';

const Details = () => {
  const location = useLocation();
  const { state } = location;
  const total = () => {
    if (state.total_supply == null) {
      return <span>{`${state.id.total_supply}`}</span>;
    }
    return <span>{`Total Supply: ${state.total_supply.toLocaleString()}`}</span>;
  };
  return (
    <div>
      <div className="imgDtDv">
        <img className="imgDt" src={state.image} alt="img" />        
      </div>
      <div className="detailPage">
        <span>
          {` ${state.name}`}
        </span>
        <span>
          {` ${state.symbol.toUpperCase()}`}
        </span>
        <span>
          market cap:
          {` ${Number(state.market_cap).toLocaleString('en-US')}`}
        </span>
        <span>
          price:
          {` ${Number(state.current_price).toLocaleString('en-US')}`}
        </span>
        <span>
          ATH:
          {` ${state.ath.toLocaleString()}`}
        </span>
        {total()}
        <span>
          Circulating Supply:
          {` ${state.circulating_supply.toLocaleString()}`}
        </span>
        <span>
          Total Volume:
          {` ${state.total_volume.toLocaleString()}`}
        </span>
        <span>
          Cap Rank:
          {` ${state.market_cap_rank.toLocaleString()}`}
        </span>
        <span>
          High 24hr:
          {` ${state.high_24h.toLocaleString()}`}
        </span>
        <span>
          Low 24hr:
          {` ${state.low_24h.toLocaleString()}`}
        </span>
        <span>
          Price Change 24hr:
          {` ${state.price_change_24h.toLocaleString()}`}
        </span>
      </div>
    </div>
  );
};

export default Details;
