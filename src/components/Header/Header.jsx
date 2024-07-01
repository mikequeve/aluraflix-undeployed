import React from 'react';
import logo from '/img/logo-aluraflix.png';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import homeIcon from '/icons/home-icon.svg';
import addIcon from '/icons/add-icon.png';

const Header = () => {
  return (
    <header className='site__header center'>
      <div className='container'>
        <img src={logo} alt='logo-aluraflix' />
        <nav className='site__header-navbar center'>
          <HeaderBtn url='./'>
            <img
              src={homeIcon}
              alt='icono-home'
              className='site__header-icon'
            />
            <span>Home</span>
          </HeaderBtn>
          <HeaderBtn url='./add-new'>
            <img
              src={addIcon}
              alt='icono-agregar'
              className='site__header-icon'
            />
            <span>Nuevo Video</span>
          </HeaderBtn>
        </nav>
      </div>
    </header>
  );
};

export default Header;
