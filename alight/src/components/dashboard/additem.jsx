import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'antd';

export default function AddItems() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Name-items"
          placeholder='xxx'
        />
        <TextField label="Expired-Date"  placeholder='xxx'/>
      </div>
      <div>
        <TextField
          label="Category"
          placeholder='xxx'
        />
        <TextField
          label="Quantity-Items"
          placeholder='xxx'
        />
      </div>
      <div>
        <TextField
          label="Sirial-Number"
          placeholder='xxx'
        />
      
      </div>
      <Button onClick={()=>alert('all data is collectly')}>ADD-ITEMS</Button>
    </Box>
  );
}