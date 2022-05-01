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
    
    try {
      const res = await axios.get(
        `https://localhost:7260/api/Games/searchByTitle/${query}`
      );
      console.log(res.data);
      setResultsFromQuery(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(resultsFromQuery)

 

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
                <SearchResults data={resultsFromQuery} />
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
