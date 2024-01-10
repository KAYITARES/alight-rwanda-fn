import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "antd";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('computer', 300, 69, 24, 40),
  createData('sugar', 200, 90, 37, 43),
  createData('scanner', 262, 16.0, 24, 6.0),
];

export default function WareHouseTables() {
  return (
    <>
    <h1>WAREHOUSE-ITEMS</h1>
    <TableContainer component={Paper}>
<Button onClick={()=>alert("woow")} className='add'>ADD-ITEMS</Button>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>WareHouse all items</caption>
        <TableHead>
          <TableRow>
            <TableCell><b className='th'>Name of Items</b></TableCell>
            <TableCell align="right" ><b className='th'>Name of Items</b></TableCell>
            <TableCell align="right"><b className='th'>Name of Items</b></TableCell>
            <TableCell align="right"><b className='th'>Name of Items</b></TableCell>
            <TableCell align="right"><b className='th'>Name of Items</b></TableCell>
            <TableCell align="center" colSpan={2}><b className='th'>OPTIONS</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
               <b className='td'> {row.name}</b>
              </TableCell>
              <TableCell align="right"><b className='td'>{row.calories}</b></TableCell>
              <TableCell align="right"><b className='td'>{row.fat}</b></TableCell>
              <TableCell align="right"><b className='td'>{row.carbs}</b></TableCell>
              <TableCell align="right"><b className='td'>{row.protein}</b></TableCell>
              <TableCell align="right"><b className='btn-up'><BrowserUpdatedIcon/></b></TableCell>
              <TableCell align="right"><b className='btn-del'><DeleteIcon/></b></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}