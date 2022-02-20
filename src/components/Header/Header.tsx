import logo from "../../imgs/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Logo of Breaking Bad series' />
    </header>
  );
};

export default Header;
