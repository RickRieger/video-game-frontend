import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import GoogleCharts from '../layout/GoogleCharts';
import Layout from '../layout/Layout';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MuiTable from '../layout/Table';
import { Copyright } from '@mui/icons-material';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import DateAndTime from '../layout/DateAndTime';
import randomColor from 'randomcolor';
const Search = () => {
  const [searchByNameResults, setSearchByNameResults] = useState(null);
  const [resultsFromQuery, setResultsFromQuery] = useState(null);
  const [consoleCollection, setConsoleCollection] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    title: 'Global Game Sales Per Console in millions $',
    width: '100%',
    height: '100%',
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
    margin: 'auto',
  });
  let [dataToBeDisplayed, setDataToBeDisplayed] = useState([
    ['Name', 'Sales', { role: 'style' }],
  ]);
  const params = useParams();
  let query = params.query;

  if (query) {
    query = query.replace(' ', '%20');
  }
  useEffect(() => {
    getAllGamesFromQuery();
    getPlatformGlobalSales();
  }, [dataToBeDisplayed]);

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
  console.log(resultsFromQuery);

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
      setConsoleCollection(obj);
    } catch (e) {
      console.log(e);
    }
  };

  if (consoleCollection) {
    for (const key in consoleCollection) {
      let color = randomColor();
      let x = [key, consoleCollection[key], color];
      dataToBeDisplayed.push(x);
    }
  }

  const handleSearchByName = async (nameOfGame) => {
    try {
      const res = await axios.get(
        `https://localhost:7260/api/Games/getGameStats/${nameOfGame}`
      );
      console.log(res.data);
      let data = res.data;
      let x = [['Game', 'GloabalSalesByConsole', { role: 'style' }]];

      for (let i = 0; i < data.length; i++) {
        let color = randomColor();
        let y = [data[i].platform, data[i].globalSales, color];
        x.push(y);
      }
      // setChartOptions();
      setDataToBeDisplayed(x);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleOnClickEvent = (data) => {
    console.log(data);
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
                  chartOptions={chartOptions}
                  dataToBeDisplayed={dataToBeDisplayed}
                  chartType='ColumnChart'
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
                <MuiTable
                  data={resultsFromQuery}
                  handleOnClickEvent={handleOnClickEvent}
                />
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
