import * as React from 'react';
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
        <TableContainer component={Paper} sx={{ margin: '2rem auto 0 auto', width: '100%', boxShadow: 'none'}}>
        <Table sx={{ minWidth: 200 , backgroundColor: '#ffffff', borderTop:'1px solid rgb(224, 224, 224)' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold', paddingLeft: '3rem'}}>Item</TableCell>
              <TableCell align="right" sx={{paddingRight: '3rem'}}>Cost (USD)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((row) => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, textTransform: 'capitalize'}}
              >
                <TableCell component="th" scope="row" sx={{paddingLeft: '3rem'}}>
                  {row.title}
                </TableCell>
                <TableCell align="right" sx={{paddingRight: '3rem'}}>{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default Cost;