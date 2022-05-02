import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import GoogleCharts from '../layout/GoogleCharts';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MuiTable from '../layout/Table';
import { Copyright } from '@mui/icons-material';
import DateAndTime from '../layout/DateAndTime';
import axios from 'axios';
import randomColor from 'randomcolor';
const PopularGames = () => {
  const [data, setData] = useState( [['Platform', 'Sales', { role: 'style' }]]);

useEffect(() => {
  getGamesByRank()

  
}, [data]);
  const getGamesByRank=async()=> {
    try {
      let res = await axios.get('https://localhost:7260/api/Games/getGamesByRank')
      let x = res.data
      await Promise.all(x.map(async(item)=>{
        let color = randomColor()
        const ranks =[item.platform, item.globalSales, color]
        data.push(ranks)
        console.log(ranks)
      }))
    
      console.log('LOOK OVER HERE',data)
    } catch (e) {
      console.log(e.message)
    }
  }

  const options = {
    chart: {
      title: 'Most Popular Game Rank',
     
    },
  };
  
  return (
    <Layout>
      <Box
        component='main'
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          padding: '100px',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth='false' sx={{ mt: 2, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 500,
                }}
              >
                {' '}
                <GoogleCharts
                  chartType='ColumnChart'
                  width='100%'
                  height='400px'
                  data={data}
                  options={options}
                />{' '}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 500,
                }}
              >
                <img
                  src='/brand.png'
                  alt='image'
                  style={{
                    width: '100%',
                    height: '80%',
                    objectFit: 'contain',
                  }}
                />
                <DateAndTime />
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                {/* <MuiTable data={data} /> */}
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Layout>
  );
};

export default PopularGames;
