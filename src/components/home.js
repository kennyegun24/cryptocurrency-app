import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCoins } from '../redux/coin/coin';
import Display from './display';

const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <div className="flex jstCnt aliCnt flxWrp gap10px">
      {coins.map((coins) => (
        <div>
        <Display
          key={coins.id.id}
          img={coins.id.image}
          id={coins.id.id.toUpperCase()}
          name={coins.id.name}
          symbol={coins.id.symbol.toUpperCase()}
          atl={coins.id.atl}
          price={coins.id.current_price}
        />
        <NavLink state={coins} to="/display">
          <h2>{coins.id.ath}</h2>
        </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Home;
