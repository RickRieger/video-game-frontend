import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
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

  // Data and options for bar chart to include global game sales per console
  const data = [[]];
  const options = {
    title: 'Global Game Sales Per Console',
    width: 600,
    height: 400,
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
  };

  return (
    <div>
      <MainRouter />
    </div>
  );
}

export default App;

{
  /* <div>
<Chart
chartType="BarChart"
width="100%"
height="400px"
data={data}
options={options}/>
</div> */
}
