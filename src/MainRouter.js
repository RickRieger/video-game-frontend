import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Dashboard from './components/DashBoard/DashBoard';
function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
