import React from 'react';

export const LoginForm = () => {
  return (
    <form className="form">
      <div className="login">
        <p className="login__info">Username</p>
        <input type="text" id="loginForm" className="login__input" />
        <label htmlFor="loginForm" className="login__err">
          Error
        </label>
      </div>
      <div className="login__pswd">
        <p className="login__pswd__info">Password</p>
        <input type="text" id="loginPswd" className="login__pswd__input" />
        <label htmlFor="loginPswd" className="login__pswd__err">
          Error paswd
        </label>
      </div>
      <div className="login__lose">
        <a href="#/" aria-label="forgot pswd" className="login__lose__pswd" />
      </div>
      <div className="login__btn">
        <a href="#/" aria-label="login button" className="login__btn__link">
          Login
        </a>
      </div>
    </form>
  );
};
