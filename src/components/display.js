// import PropTypes from 'prop-types';

const Display = ({ name, price, symbol, img}) => {
  return (
    <section className="sec1 ">
      <img className="img" src={img}></img>
      <p>{name}</p>
      <p>{symbol}</p>
      <p>${price}</p>
    </section>
  )
}

export default Display

// Display.propTypes = {
//   // name: PropTypes.string.isRequired,
//   ath: PropTypes.string.isRequired,
// };