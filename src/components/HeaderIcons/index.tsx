import Search from '../../assets/images/search.svg';
import Hamburger from '../../assets/images/hamburger.svg';
import './HeaderIcons.scss';

const HeaderIcons = () => {
  return (
    <ul className="header-icons">
      <li className="search">
        <img src={Search} alt="Pesquisar" />
      </li>
      <li className="hamburger">
        <img src={Hamburger} alt="Menu" />
      </li>
      <li className="user">
        <img src="https://github.com/tairadev.png" alt="Guilherme Taira" />
        <p>Guilherme</p>
      </li>
    </ul>
  );
};

export default HeaderIcons;
