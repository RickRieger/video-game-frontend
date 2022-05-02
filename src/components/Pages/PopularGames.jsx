import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Chart from 'react-google-charts';
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
import rankData from '../../dataByRank';
const PopularGames = () => {
  const [data, setData] = useState([['Game', 'Rank', { role: 'style' }]]);
  const [responseFromServer, setResponseFromServer] = useState(null);
  if (data.length > 1) {
    responseFromServer.map((item) => {
      let color = randomColor();
      const ranks = [item.name, item.rank, color];
      data.push(ranks);
    });
  }

  useEffect(() => {
    getGamesByRank();
  }, [data]);

  const getGamesByRank = async () => {
    try {
      let res = await axios.get(
        'https://localhost:7260/api/Games/getGamesByRank'
      );
      let x = res.data;
      setResponseFromServer(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const chartOptions = {
    title: 'Most Popular Games by Rank',
    width: '100%',
    height: '100%',
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
    margin: 'auto',
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
                {data.length > 1 ? (
                  <Chart
                    chartType={'ColumnChart'}
                    data={data}
                    options={chartOptions}
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
                <MuiTable data={rankData} />
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
