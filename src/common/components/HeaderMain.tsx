import React from 'react';

export const HeaderMain = () => {
  return (
    <div className="header-main">
      <div className="header-main__inner">
        <ul className="header-main__items">
          <li className="header-main__item">
            <a href="#/" aria-label="link to message" className="header-main__link" />
          </li>
          <li className="header-main__item">
            <a href="#/" aria-label="link to notification" className="header-main__link" />
          </li>
          <li className="header-main__item">
            <a href="#/" aria-label="link to user profile" className="header-main__link" />
          </li>
          <li className="header-main__item">
            <a href="#/" aria-label="link to settings" className="header-main__link" />
          </li>
        </ul>
      </div>
    </div>
  );
};
