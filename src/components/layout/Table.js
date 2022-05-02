import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import randomColor from 'randomcolor';
import axios from 'axios';
// Generates Order of Data for the table
function createData(
  id,
  title,
  releaseYear,
  platform,
  publisher,
  viewGameStats
) {
  return { id, title, releaseYear, platform, publisher, viewGameStats };
}

function preventDefault(event) {
  event.preventDefault();
}

const MuiTable = ({
  data,
  setChartOptions,
  setDataToBeDisplayed,
  handleOnClick,
}) => {
  let rows = [];
  if (data) {
    data.forEach((element, index) => {
      let x = createData(
        index,
        element.name,
        element.platform,
        element.year,
        element.publisher
      );
      rows.push(x);
    });
  }

  const handleUpdateChart = async (nameOfGame) => {
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

  return (
    <React.Fragment>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Release Year</TableCell>
            <TableCell>Publisher</TableCell>
            <TableCell align='right'>View Game Stats</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.releaseYear}</TableCell>
              <TableCell>{row.platform}</TableCell>
              <TableCell>{row.publisher}</TableCell>
              <TableCell align='right'>
                <VideogameAssetIcon
                  style={{ color: 'blue', fontSize: 'large' }}
                  onClick={() => handleOnClick(row.title)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        See more games
      </Link>
    </React.Fragment>
  );
};

export default MuiTable;
