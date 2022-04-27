import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import Axios from './utils/Axios';
import Dashboard from './components/NavBar/DashBoard';
=======
import axios from 'axios';
import { Chart } from "react-google-charts";
>>>>>>> 9b046b6e1a0041545ba6d3b045ac7df4d1d96030
function App() {
const [platforms, setPlatforms] = useState([]);
const [globalSales, setGlobalSales] = useState([]);

  useEffect(() => {
    // console.log(process.env.REACT_APP_AXIOS)
    getAllVideoGames()
  }, []);

  const getAllVideoGames = async () => {
    try {
      const res = await axios.get('https://localhost:7260/api/Games/');
      console.log(res.data);
      setPlatforms(res.data.platforms);
      setGlobalSales(res.data.globalSales)
    } catch (e) {
      console.log(e);
    }
  };
  // Data and options for bar chart to include global game sales per console
  const data = [
    []
  ];
const options = {
  title: "Global Game Sales Per Console",
  width: 600,
  height: 400,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
};
  


  return (
    <div>
      <Dashboard />
      <h3>Test!</h3>
      <div>
      <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}/>
      </div>
    </div>
  );
}

export default App;
