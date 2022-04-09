import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from 'common/components/Header';
/* import { Favorites } from 'app/pages/Favorites'; */
import { SignUp } from 'app/pages/SignUp';
import { Login } from 'app/pages/Login';
import { HomePage } from 'app/pages/HomePage';
import { Favorites } from 'app/pages/Favorites';
/* import { Chart } from 'common/components/Chart'; */
/* import { LoginForm } from 'common/components/LoginForm'; */

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Navigate to="/homepage" />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};
