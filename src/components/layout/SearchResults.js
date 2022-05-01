import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Button } from '@mui/material';
// Generate Order Data
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
let rows = [];
// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     'Tupelo, MS',
//     'VISA ⠀•••• 3719',
//     312.44
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     'London, UK',
//     'VISA ⠀•••• 2574',
//     866.99
//   ),
//   createData(
//     2,
//     '16 Mar, 2019',
//     'Tom Scholz',
//     'Boston, MA',
//     'MC ⠀•••• 1253',
//     100.81
//   ),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     'Gary, IN',
//     'AMEX ⠀•••• 2000',
//     654.39
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     'Long Branch, NJ',
//     'VISA ⠀•••• 5919',
//     212.79
//   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}

const SearchResults = ({ data }) => {
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

export default SearchResults;
