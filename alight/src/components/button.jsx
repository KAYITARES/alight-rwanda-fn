import React from 'react';
import Button from '@mui/material/Button';

export default function Buttons(props) {
  return (
    <Button variant="contained" disableElevation style={{fontSize:props.fontsize,background:props.background}}>
     {props.name}
    </Button>
  );
}

