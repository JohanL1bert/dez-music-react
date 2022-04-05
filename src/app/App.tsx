import React from 'react';
import { Header } from 'common/components/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <section className="login">
          <div className="login__inner">1</div>
        </section>
      </main>
    </div>
  );
};
