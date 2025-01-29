import './Header.module.scss';
import Logo from '../../assets/images/logo-plataforma.svg';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="AluraDev" className="logo" />
    </header>
  );
};

export default Header;
