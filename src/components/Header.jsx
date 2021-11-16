import { Link } from 'react-router-dom';
import '../css/Header.css';
import '../css/index.css';
import logo from '../assets/logoV5.png';

const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <Link to="/">
          <div id="logoContainer">
            {' '}
            <img id="logo" src={logo} alt="Logo" />{' '}
          </div>
        </Link>
        <span>
          <Link to="/quizz" id="quizzLink">
            QUIZZ
          </Link>
          <button
            className="bg-melon-pink hover:bg-dark-sienna text-black hover:text-white font-bold px-2 py-2 m-5"
            type="button"
            id="logBtn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </span>
      </nav>
    </header>
  );
};

export default Header;
