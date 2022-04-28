import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MainRouter from './MainRouter';

function App() {
  const [platforms, setPlatforms] = useState([]);
  const [globalSales, setGlobalSales] = useState([]);

  useEffect(() => {
    // getAllVideoGames();
  }, []);

  const getAllVideoGames = async () => {
    try {
      const res = await axios.get('https://localhost:7260/api/Games/');
      console.log(res.data);
      setPlatforms(res.data.platforms);
      setGlobalSales(res.data.globalSales);
    } catch (e) {
      console.log(e);
    }
  };

 

  return (
    <div>
      <MainRouter />
    </div>
  );
}

export default App;

