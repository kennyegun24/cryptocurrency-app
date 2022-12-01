import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { fetchCoins } from '../redux/coin/coin';
import Display from './display';
import img from '../assets/R.jpg';

const Home = () => {
  const dispatch = useDispatch();

  const { coins, status } = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (status === null) {
      dispatch(fetchCoins());
    }
  }, [status, dispatch]);

  return (
    <div>
      {status === 'pending' ? (
        <div className="pending">
          <p className="round" />
          <h3>LOADING...</h3>
        </div>
      ) : (
        <>
          <div className="imgDv">
            <img className="imgBg" src={img} alt="" />
          </div>
          <div className="searchDiv">
            <input
              className="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
            />
            <FaSearch className="searchIcon" />
          </div>
          <div className="grid">
            {coins.filter((searchCoin) => searchCoin.name.toLowerCase()
              .includes(search.toLowerCase())
              || searchCoin.symbol.toLowerCase().includes(search.toLowerCase()))
              .map((coins) => (
                <div className=" sec1" key={coins.id}>
                  <NavLink className="coinLink" state={coins} to="/display">
                    <Display
                      key={coins.id}
                      img={coins.image}
                      id={coins.id.toUpperCase()}
                      name={coins.name}
                      symbol={coins.symbol.toUpperCase()}
                      atl={coins.atl}
                      price={coins.current_price}
                    />
                  </NavLink>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
