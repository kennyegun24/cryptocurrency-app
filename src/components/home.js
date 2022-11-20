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
    <div className="flex jstCnt flxWrp aliCnt ">
      {coins.map((coins) => (
        <div className="flxCnt flex jstCnt aliCnt flxWrp gap10px sec1" key={coins.id.id}>
          <NavLink className="coinLink" state={coins} to="/display">
            <Display
              key={coins.id.id}
              img={coins.id.image}
              id={coins.id.id.toUpperCase()}
              name={coins.id.name}
              symbol={coins.id.symbol.toUpperCase()}
              atl={coins.id.atl}
              price={coins.id.current_price}
            />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Home;
