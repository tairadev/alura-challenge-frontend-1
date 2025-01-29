import { Link, useLocation } from 'react-router-dom';
import CodeIcon from '../../assets/images/icon-code.svg';
import UsersIcon from '../../assets/images/icon-users.svg';

import './SideBar.scss';

const menuItems = [
  { path: '/', label: 'Editor de código', icon: CodeIcon },
  { path: '/comunidade', label: 'Comunidade', icon: UsersIcon },
];

const SideBar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h3>MENU</h3>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? 'active' : ''}
          >
            <Link to={item.path}>
              <div className="icon-container">
                <img src={item.icon} alt={item.label} />
              </div>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
