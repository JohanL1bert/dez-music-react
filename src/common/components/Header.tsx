import React from 'react';
/* import { HeaderLogin } from 'common/components/HeaderLogin'; */
import { HeaderMain } from 'common/components/HeaderMain';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__link">
          <nav className="header__nav">
            <ul className="header__nav__items">
              <li className="header__nav__logo" />
              <li className="header__nav__tittle">
                <a href="#/" aria-label="link to music page" className="header__nav__tittle-link">
                  Music World
                </a>
              </li>
              <li className="header__nav__stream">
                <a href="#/" aria-label="link to stream page" className="header__nav__stream-link">
                  Stream
                </a>
              </li>
              <li className="header__nav__library">
                <a href="#/" aria-label="link to libary page" className="header__nav__library-link">
                  Library
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__input">
          <input type="text" className="header__input-music" />
        </div>
        <HeaderMain />
      </div>
      <div className="header__line" />
    </header>
  );
};
