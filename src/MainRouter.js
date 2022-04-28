import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
