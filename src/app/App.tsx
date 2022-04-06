import React from 'react';
import { Header } from 'common/components/Header';
import { LoginForm } from 'common/components/LoginForm';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <main className="app__main">1</main>
    </div>
  );
};
