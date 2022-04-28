import Layout from '../layout/Layout';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
function Home() {
  useEffect(() => {
    console.log('This Is Working!');
  }, []);

  return (
    <Layout>
      <Grid item xs={12} md={12} lg={12} style={{ zIndex: '100' }}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'scroll',
            }}
          >
            <h1>hello man</h1>
            <h2>omg</h2>
            <h3>well then</h3>
          </Paper>
        </Grid>
      </Grid>
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
