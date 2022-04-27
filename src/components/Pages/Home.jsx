import React from 'react';
import Dashboard from '../Pages/Home';
import Grid from '@mui/material/Grid';

function HomeContent() {
  return (
    <Dashboard>
      <Grid item xs={12} md={12} lg={12}>
        <h1 style={{ marginTop: '500px' }}>Home Page</h1>
      </Grid>
    </Dashboard>
  );
}

export default function Home() {
  return <HomeContent />;
}
