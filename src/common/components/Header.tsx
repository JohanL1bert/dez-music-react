import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__link">
          <nav className="header__nav">
            <ul className="header__nav__items">
              <li className="header__nav__logo">1</li>
              <li className="header__nav__tittle">Music World</li>
              <li className="header__nav__stream">Stream</li>
              <li className="header__nav__library">Library</li>
            </ul>
          </nav>
        </div>
        <div className="header__input">1</div>
        <div className="header__account">1</div>
      </div>
      <div className="header__line" />
    </header>
  );
};
