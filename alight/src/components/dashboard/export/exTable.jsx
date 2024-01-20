import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
// import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "antd";
import { useState,useEffect } from "react";
import {Modal} from 'antd'
// import AddItems from './additem';
import axios from 'axios';



export default function ExportTable() {
  const [IsItem, setIsItems] = useState(false);
  const[isDatas,setIsDatas] = useState(null);

useEffect(()=>{
  const fetchData = async () =>{
    try {
      const response = await axios.get('http://localhost:3030/api/v1/stock');
      setIsDatas(response.data)
    } catch (error) {
      console.log('error is',error)
    }
  }
  fetchData([])
},[])
  console.log(isDatas)
  
  const handleOpen = ()=>{
      setIsItems(true)
  }
  const handleClose = () =>{
      setIsItems(false)
  }
  return (
    <>
    <Modal open={IsItem} onCancel={handleClose} footer = {null}>
  {
    setIsItems && (
                {/* <AddItems/> */}
            )
  }

  </Modal>
    <h1>EXPORT-ITEMS</h1>
    <TableContainer component={Paper}>
<Button onClick={ handleOpen } className='add'>ADD-ITEMS</Button>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>WareHouse all items</caption>
        <TableHead>
          <TableRow>
            <TableCell><b className='th'>Product Name</b></TableCell>
            <TableCell align="right" ><b className='th'>Request Name</b></TableCell>
            <TableCell align="right"><b className='th'> Request Phone</b></TableCell>
            <TableCell align="right"><b className='th'>Request Email</b></TableCell>
            <TableCell align="right"><b className='th'>Request Location</b></TableCell>
            <TableCell align="right"><b className='th'>Request Qauntity</b></TableCell>
            <TableCell align="right"><b className='th'>Request Time</b></TableCell>
            <TableCell align="center" colSpan={2}><b className='th'>OPTIONS</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
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
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}