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
import { Button } from 'antd';
import {Modal} from 'antd'
import { useState,useEffect } from 'react';
import PostAdminForm from './Pjob';
import axios from 'axios';

function truncateText(text, maxLength) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLength);
     return truncatedWords.join(' ') + (words.length > maxLength ? '...' : '');
 }

export default function JobTable() {
  const [IsItem, setIsItems] = useState(false);
  const [IsRecords,setIsRecords] = useState(null)
  
useEffect(()=>{
  const fetchRecords = async () =>{
    try {
      const response = await axios.get('http://localhost:3030/api/v1/job');
    setIsRecords(response.data)
    } catch (error) {
      
    }
    
  }
  fetchRecords([])
}, [])
console.log(IsRecords)

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
              <PostAdminForm/>
            )
  }

  </Modal>
    <div className='dem'>
    <h1>JOB-TABLE</h1>
 <TableContainer component={Paper}>
 <Button className='add' onClick={handleOpen}>ADD-JOBS</Button>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>WareHouse all items</caption>
        <TableHead>
       
          <TableRow>
          <TableCell><b className='th'>Job-Image</b></TableCell>
            <TableCell align="right"><b className='th'>Job-Title</b></TableCell>
            <TableCell align="right"><b className='th'>Job-Summary</b></TableCell>
            <TableCell align="right"><b className='th'>Job-Description</b></TableCell>
            <TableCell align="right"><b className='th'>Job-PublisheDate</b></TableCell>
            <TableCell align="right"><b className='th'>Job-DeadLine</b></TableCell>
            <TableCell align="right"><b className='th'>Job-Criteria</b></TableCell>
            <TableCell align="center" colSpan={2}><b className='th'>OPTIONS</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {IsRecords ? (IsRecords.data.map((records) => (
            <TableRow key={records._id}>
              <TableCell component="th" scope="row">
               <b className='td'> {records.jobpicture}</b>
              </TableCell>
              <TableCell align="right"><b className='td'>{truncateText(records.jobTitle,1)}</b></TableCell>
              <TableCell align="right"><b className='td'>{truncateText(records.jobSummaryDescription,2)}</b></TableCell>
              <TableCell align="right"><b className='td'>{records.jobLocation}</b></TableCell>
              <TableCell align="right"><b className='td'>{truncateText(records.publisherDate,1)}</b></TableCell>
              <TableCell align="right"><b className='td'>{records.deadLine}</b></TableCell>
              <TableCell align="right"><b className='td'>{records.jobCriteria}</b></TableCell>
              <TableCell align="right"><Button className='btn-up'><BrowserUpdatedIcon/></Button></TableCell>
              <TableCell align="right"><Button className='btn-del'><DeleteIcon/></Button></TableCell>
            </TableRow>
          ))):(
            <p>Loading...</p>
          )}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </>
   
  );
}
      