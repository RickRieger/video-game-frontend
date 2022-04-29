import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import PopularGames from './components/Pages/PopularGames';
import Search from './components/Pages/Search';
function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path='/popular-games' element={<PopularGames />} />
      </Routes>
      <Routes>
        <Route exact path='/search/:query' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
