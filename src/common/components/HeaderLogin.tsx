import React from 'react';

export const HeaderLogin = () => {
  return (
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
  );
};
