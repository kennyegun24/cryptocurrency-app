import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;

  const total = () => {
    if (state.id.total_supply == null) {
      return <span>{`${state.id.total_supply}`}</span>;
    }
    return <span>{`Total Supply: ${state.id.total_supply.toLocaleString()}`}</span>;
  };
  return (
    <div className="detailPage">
      <img className="img" src={state.id.image} alt="img" />
      <span>
        {` ${state.id.name}`}
      </span>
      <span>
        {` ${state.id.symbol.toUpperCase()}`}
      </span>
      <span>
        market cap:
        {` ${Number(state.id.market_cap).toLocaleString('en-US')}`}
      </span>
      <span>
        price:
        {` ${Number(state.id.current_price).toLocaleString('en-US')}`}
      </span>
      <span>
        ATH:
        {` ${state.id.ath.toLocaleString()}`}
      </span>
      {total()}
      <span>
        Circulating Supply:
        {` ${state.id.circulating_supply.toLocaleString()}`}
      </span>
      <span>
        Total Volume:
        {` ${state.id.total_volume.toLocaleString()}`}
      </span>
      <span>
        Cap Rank:
        {` ${state.id.market_cap_rank.toLocaleString()}`}
      </span>
      <span>
        High 24hr:
        {` ${state.id.high_24h.toLocaleString()}`}
      </span>
      <span>
        Low 24hr:
        {` ${state.id.low_24h.toLocaleString()}`}
      </span>
      <span>
        Price Change 24hr:
        {` ${state.id.price_change_24h.toLocaleString()}`}
      </span>
    </div>
  );
};

export default Details;
