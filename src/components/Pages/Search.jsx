import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import Layout from '../layout/Layout';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SearchResults from '../layout/SearchResults';
import { Copyright } from '@mui/icons-material';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import DateAndTime from '../layout/DateAndTime';
const Search = () => {
  const [resultsFromQuery, setResultsFromQuery] = useState(null);
  const params = useParams();
  let query = params.query;

  if (query) {
    query = query.replace(' ', '%20');
  }
  console.log(query);

  useEffect(() => {
    getAllGamesFromQuery();
  }, []);

  const getAllGamesFromQuery = async () => {
    console.log('+++++=====>', params);
    // try {
    //   const res = await axios.get(
    //     `https://localhost:7260/api/Games/searchByTitle/${query}`
    //   );
    //   console.log(res.data);
    //   setResultsFromQuery(res.data);
    // } catch (e) {
    //   console.log(e.message);
    // }
  };

  const dataFromPostMan = [
    {
      id: 3,
      rank: 17,
      name: 'Grand Theft Auto V',
      platform: 'PS3',
      year: 2013,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 7.01,
      europeSales: 9.27,
      japanSales: 0.97,
      otherSales: 4.14,
      globalSales: 21.4,
    },
    {
      id: 10,
      rank: 57,
      name: 'Grand Theft Auto IV',
      platform: 'PS3',
      year: 2008,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 4.76,
      europeSales: 3.76,
      japanSales: 0.44,
      otherSales: 1.62,
      globalSales: 10.57,
    },
    {
      id: 11,
      rank: 25,
      name: 'Grand Theft Auto: Vice City',
      platform: 'PS2',
      year: 2002,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 8.41,
      europeSales: 5.49,
      japanSales: 0.47,
      otherSales: 1.78,
      globalSales: 16.15,
    },
    {
      id: 13,
      rank: 52,
      name: 'Grand Theft Auto IV',
      platform: 'X360',
      year: 2008,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 6.76,
      europeSales: 3.1,
      japanSales: 0.14,
      otherSales: 1.03,
      globalSales: 11.02,
    },
    {
      id: 18,
      rank: 39,
      name: 'Grand Theft Auto III',
      platform: 'PS2',
      year: 2001,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 6.99,
      europeSales: 4.51,
      japanSales: 0.3,
      otherSales: 1.3,
      globalSales: 13.1,
    },
    {
      id: 26,
      rank: 24,
      name: 'Grand Theft Auto V',
      platform: 'X360',
      year: 2013,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 9.63,
      europeSales: 5.31,
      japanSales: 0.06,
      otherSales: 1.38,
      globalSales: 16.38,
    },
    {
      id: 31,
      rank: 18,
      name: 'Grand Theft Auto: San Andreas',
      platform: 'PS2',
      year: 2004,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 9.43,
      europeSales: 0.4,
      japanSales: 0.41,
      otherSales: 10.57,
      globalSales: 20.81,
    },
    {
      id: 34,
      rank: 45,
      name: 'Grand Theft Auto V',
      platform: 'PS4',
      year: 2014,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 3.8,
      europeSales: 5.81,
      japanSales: 0.36,
      otherSales: 2.02,
      globalSales: 11.98,
    },
    {
      id: 118,
      rank: 198,
      name: 'Grand Theft Auto V',
      platform: 'XOne',
      year: 2014,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 2.66,
      europeSales: 2.01,
      japanSales: 0,
      otherSales: 0.41,
      globalSales: 5.08,
    },
    {
      id: 135,
      rank: 91,
      name: 'Grand Theft Auto: Liberty City Stories',
      platform: 'PSP',
      year: 2005,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 2.9,
      europeSales: 2.83,
      japanSales: 0.24,
      otherSales: 1.75,
      globalSales: 7.72,
    },
    {
      id: 255,
      rank: 199,
      name: 'Grand Theft Auto: Vice City Stories',
      platform: 'PSP',
      year: 2006,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 1.7,
      europeSales: 2.02,
      japanSales: 0.16,
      otherSales: 1.21,
      globalSales: 5.08,
    },
    {
      id: 307,
      rank: 361,
      name: 'Grand Theft Auto: Liberty City Stories',
      platform: 'PS2',
      year: 2006,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 1.56,
      europeSales: 1.4,
      japanSales: 0.07,
      otherSales: 0.5,
      globalSales: 3.54,
    },
    {
      id: 439,
      rank: 389,
      name: 'Grand Theft Auto 2',
      platform: 'PS',
      year: 1998,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 1.13,
      europeSales: 2.07,
      japanSales: 0,
      otherSales: 0.22,
      globalSales: 3.42,
    },
    {
      id: 602,
      rank: 686,
      name: 'Grand Theft Auto',
      platform: 'PS',
      year: 1997,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.79,
      europeSales: 1.35,
      japanSales: 0.04,
      otherSales: 0.14,
      globalSales: 2.32,
    },
    {
      id: 667,
      rank: 618,
      name: 'Rockstar Games Double Pack: Grand Theft Auto III & Grand Theft Auto Vice City',
      platform: 'XB',
      year: 2003,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 1.84,
      europeSales: 0.56,
      japanSales: 0,
      otherSales: 0.09,
      globalSales: 2.49,
    },
    {
      id: 894,
      rank: 875,
      name: 'Grand Theft Auto: San Andreas',
      platform: 'XB',
      year: 2005,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 1.26,
      europeSales: 0.61,
      japanSales: 0,
      otherSales: 0.09,
      globalSales: 1.95,
    },
    {
      id: 1042,
      rank: 1034,
      name: 'Rockstar Games Double Pack: Grand Theft Auto III & Grand Theft Auto Vice City',
      platform: 'PS2',
      year: 2003,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.85,
      europeSales: 0.66,
      japanSales: 0,
      otherSales: 0.22,
      globalSales: 1.72,
    },
    {
      id: 1436,
      rank: 1443,
      name: 'Grand Theft Auto: Chinatown Wars',
      platform: 'DS',
      year: 2009,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.59,
      europeSales: 0.57,
      japanSales: 0.05,
      otherSales: 0.14,
      globalSales: 1.35,
    },
    {
      id: 1756,
      rank: 1904,
      name: 'Grand Theft Auto: Chinatown Wars',
      platform: 'PSP',
      year: 2009,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.28,
      europeSales: 0.5,
      japanSales: 0.03,
      otherSales: 0.28,
      globalSales: 1.08,
    },
    {
      id: 1961,
      rank: 1898,
      name: 'Grand Theft Auto V',
      platform: 'PC',
      year: 2015,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.36,
      europeSales: 0.64,
      japanSales: 0,
      otherSales: 0.08,
      globalSales: 1.08,
    },
    {
      id: 2072,
      rank: 2122,
      name: 'Grand Theft Auto: San Andreas',
      platform: 'PC',
      year: 2005,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0,
      europeSales: 0.92,
      japanSales: 0,
      otherSales: 0.05,
      globalSales: 0.98,
    },
    {
      id: 2116,
      rank: 2140,
      name: 'Grand Theft Auto: Vice City Stories',
      platform: 'PS2',
      year: 2007,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.78,
      europeSales: 0.03,
      japanSales: 0.03,
      otherSales: 0.13,
      globalSales: 0.97,
    },
    {
      id: 2206,
      rank: 2359,
      name: 'Grand Theft Auto IV',
      platform: 'PC',
      year: 2008,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.01,
      europeSales: 0.79,
      japanSales: 0,
      otherSales: 0.08,
      globalSales: 0.88,
    },
    {
      id: 6882,
      rank: 6907,
      name: 'Grand Theft Auto',
      platform: 'GBA',
      year: 2004,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.17,
      europeSales: 0.06,
      japanSales: 0,
      otherSales: 0,
      globalSales: 0.24,
    },
    {
      id: 9792,
      rank: 9829,
      name: 'Grand Theft Auto: San Andreas',
      platform: 'X360',
      year: 2008,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.08,
      europeSales: 0.03,
      japanSales: 0,
      otherSales: 0.01,
      globalSales: 0.12,
    },
    {
      id: 10371,
      rank: 10381,
      name: 'Grand Theft Auto: Mission Pack #1, London 1969',
      platform: 'PS',
      year: 1998,
      genre: 'Adventure',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0.06,
      europeSales: 0.04,
      japanSales: 0,
      otherSales: 0.01,
      globalSales: 0.11,
    },
    {
      id: 13745,
      rank: 13734,
      name: 'Grand Theft Auto: Vice City',
      platform: 'PC',
      year: 2003,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0,
      europeSales: 0.03,
      japanSales: 0,
      otherSales: 0.01,
      globalSales: 0.04,
    },
    {
      id: 16087,
      rank: 16096,
      name: 'Grand Theft Auto III',
      platform: 'PC',
      year: 2002,
      genre: 'Action',
      publisher: 'Take-Two Interactive',
      northAmericaSales: 0,
      europeSales: 0.01,
      japanSales: 0,
      otherSales: 0,
      globalSales: 0.01,
    },
  ];

  // for chart
  const data = [
    [
      'Element',
      'Density',
      { role: 'style' },
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
      },
    ],
    ['Copper', 8.94, '#b87333', null],
    ['Silver', 10.49, 'silver', null],
    ['Gold', 19.3, 'gold', null],
    ['Platinum', 21.45, 'color: #e5e4e2', null],
  ];
  const options = {
    chart: {
      title: 'Density of Precious Metals, in g/cm^3',
      width: 600,
      height: 400,
      bar: { groupWidth: '95%' },
      legend: { position: 'none' },
    },
  };

  // RENDER STUFF!
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
                {/* {' '}
                <Chart
                  chartType='BarChart'
                  width='100%'
                  height='400px'
                  data={data}
                  options={options}
                />{' '} */}
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
                <SearchResults data={dataFromPostMan} />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Layout>
  );
};

export default Search;
