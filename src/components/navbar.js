import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <div>
      <h3 className="header">Cryptocurrency Hub</h3>
    </div>
    <div className="navDiv">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/display">Display</Link>
    </div>
  </nav>
);

export default Navbar;
