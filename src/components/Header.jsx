import { Link } from 'react-router-dom';
import './Header.css';
import '../index.css';
import logo from '../assets/logoV5.png';

const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <Link to="/">
          {' '}
          <img id="logo" src={logo} alt="Logo" />{' '}
        </Link>
        <button
          className="bg-melon-pink hover:bg-dark-sienna text-black hover:text-white font-bold px-2 py-2 m-5"
          type="button"
          id="logBtn"
        >
          LOGiN
        </button>
      </nav>
    </header>
  );
};

export default Header;
