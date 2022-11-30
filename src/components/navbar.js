import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <div className="navDiv">
      <Link className="link" to="/">&times;</Link>
    </div>
    <div>
      <h3 className="header">Cryptocurrency Hub</h3>
    </div>

  </nav>
);

export default Navbar;
