import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TableContainer } from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow, TableBody } from '@mui/material';
import { TableCell } from '@mui/material';

import { Paper } from '@mui/material';
import costLiving from "../assets/content/costLiving.json"



const Cost = (props) => {
    const arr = costLiving[props.location];

    return (
        <TableContainer component={Paper} sx={{ margin: '2rem auto', width: '70%'}}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold'}}>Item</TableCell>
              <TableCell align="right">Cost (USD)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((row) => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default Cost;