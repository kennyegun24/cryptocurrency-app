import PropTypes from 'prop-types';

const Display = ({
  name, price, symbol, img,
}) => (
  <section>
    <img className="img" src={img} alt={`${name}icon`} />
    <p>{name}</p>
    <p>{symbol}</p>
    <p>
      $
      {price}
    </p>
  </section>
);

export default Display;

Display.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
