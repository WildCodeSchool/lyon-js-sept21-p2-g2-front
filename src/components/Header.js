import logo from '../assets/logoV2.png';

import '../wll.css';
import '../index.css';

const Header = () => {
  return (
    <div>
      <nav className="navBar">
        <img id="logo" src={logo} alt="Logo" />
        <button
          className="bg-melon-pink hover:bg-dark-sienna text-black hover:text-white font-bold px-2 py-2 m-5"
          type="button"
          id="logBtn"
        >
          LOGiN
        </button>
      </nav>
    </div>
  );
};

export default Header;
