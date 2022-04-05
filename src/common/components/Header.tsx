import React from 'react';

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
        <div className="header__account">
          <div className="header__account__create-btn">
            <a href="/#" aria-label="link to create acc" className="header__account__create-link">
              Create account
            </a>
          </div>
          <div className="header__account__login">
            <a href="/#" aria-label="link to login acc" className="header__account__login-link">
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="header__line" />
    </header>
  );
};
