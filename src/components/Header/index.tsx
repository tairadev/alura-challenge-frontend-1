import './Header.scss';
import Logo from '../../assets/images/logo-plataforma.svg';
import HeaderIcons from '../HeaderIcons';
import Input from '../Input';

const Header = () => {
  return (
    <header className='container'>
      <div className='left-col'>
        <div className='logo-container'>
          <img src={Logo} alt='AluraDev' className='logo' />
        </div>
        <Input
          className='search-input'
          name='search'
          type='search'
          placeholder='Busque por algo'
        />
      </div>
      <HeaderIcons />
    </header>
  );
};

export default Header;
