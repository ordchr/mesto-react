import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="page__section header">
      <img src={logo} className="header__logo" alt="Логотип Mesto Russia" />
    </header>
  );

}

export default Header;
