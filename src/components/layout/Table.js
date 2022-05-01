import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
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

const MuiTable = ({ data }) => {
  let rows =[]
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
                  onClick={() => console.log('onClick works===>', row.id)}
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
