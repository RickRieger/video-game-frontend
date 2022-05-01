import Layout from '../layout/Layout';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import GoogleCharts from '../layout/GoogleCharts';
import axios from 'axios';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Table from '../layout/Table';
import DateAndTime from '../layout/DateAndTime';
import { dataByPlatformGlobalSales } from '../../dataByPlatformGlobalSales';
import { dataByGameId } from '../../dataByGameId';
import randomColor from 'randomcolor';
const Home = () => {
  useEffect(() => {
    getPlatformGlobalSales();
  }, []);

  const [consoleCollection, setConsoleCollection] = useState(null);

  // Column Google Chart Starter Code
  let dataToBeDisplayed = [['Name', 'Sales', { role: 'style' }]];
  const chartOptions = {
    title: 'Global Game Sales Per Console in millions $',
    width: '100%',
    height: '100%',
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
    margin: 'auto',
  };

  if (consoleCollection) {
    for (const key in consoleCollection) {
      // num += 1;
      // console.log(num);
      // console.log(element);
      // console.log(collection[element]);
      // let x = randomColor();
      // console.log(x);
      let color = randomColor();
      let x = [key, consoleCollection[key], color];
      dataToBeDisplayed.push(x);
    }
  }

  const getPlatformGlobalSales = async () => {
    try {
      const res = await axios.get(
        'https://localhost:7260/api/Games/byPlatform-globalsales'
      );

      // let data = dataByPlatformGlobalSales;
      let data = res.data;
      // console.log(dataByPlatformGlobalSales);
      let obj = {};
      for (let i = 0; i < data.length; i++) {
        if (obj[data[i].platform]) {
          obj[data[i].platform] += data[i].globalSales;
        } else {
          obj[data[i].platform] = data[i].globalSales;
        }
      }
      setConsoleCollection(obj);
    } catch (e) {
      console.log(e);
    }
  };

  function Copyright(props) {
    return (
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        {...props}
      >
        {'Copyright © '}
        <Link color='inherit' href='https://mui.com/'>
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  console.log('dataToBeDisplayed==>', dataToBeDisplayed);
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
                {consoleCollection ? (
                  <GoogleCharts
                    chartOptions={chartOptions}
                    dataToBeDisplayed={dataToBeDisplayed}
                    chartType='ColumnChart'
                  />
                ) : (
                  ''
                )}
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
                <Table data={dataByGameId} />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
