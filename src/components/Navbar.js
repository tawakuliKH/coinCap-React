import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="header" data-testid="navbar-component">
      {location.pathname !== '/' && (
      <NavLink to="/">
        <FontAwesomeIcon className="arrow" icon={faAngleLeft} />
      </NavLink>
      )}
      <h3>Crypto Coins</h3>
    </header>
  );
};

export default Navbar;
