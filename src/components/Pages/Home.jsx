import Layout from '../layout/Layout';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import OurCharts from '../layout/OurCharts';
import axios from 'axios';
function Home() {
  const [consoleCollection, setConsoleCollection] = useState(null);



  useEffect(() => {
    getPlatformGlobalSales()
  }, []);
  

  const getPlatformGlobalSales = async () => {
    try {
      const res = await axios.get(
        'https://localhost:7260/api/Games/byPlatform-globalsales'
      );
      let data = res.data;
      let obj = {};
      for (let i = 0; i < data.length; i++) {
        if (obj[data[i].platform]) {
          obj[data[i].platform] += data[i].globalSales;
        } else {
          obj[data[i].platform] = data[i].globalSales;
        }
      }
      console.log(obj);
      setConsoleCollection(obj);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Layout>
     
        
          
      
      <OurCharts consoleCollection={consoleCollection}/>
         
          
        
    </Layout>
  );
}

export default Home;

// import React from 'react';
// import Dashboard from '../Pages/Home';
// import Grid from '@mui/material/Grid';

// function HomeContent() {
//   return (
//     <Dashboard>
//       <Grid item xs={12} md={12} lg={12}>
//         <h1 style={{ marginTop: '500px' }}>Home Page</h1>
//       </Grid>
//     </Dashboard>
//   );
// }

// export default function Home() {
//   return <HomeContent />;
// }
//
