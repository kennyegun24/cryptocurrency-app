import { Link } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';

const Navbar = () => (
  <nav className="nav">
    <div className="navDiv">
      <Link className="link" to="/">
        <FaLessThan />
      </Link>
    </div>
    <div className="header">
      <h3 className="head">Cryptocurrency Hub</h3>
    </div>

  </nav>
);

export default Navbar;
