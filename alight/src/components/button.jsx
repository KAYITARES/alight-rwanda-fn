import React from 'react';
import Button from '@mui/material/Button';

 function Buttons(props) {
  return (
    <Button variant="contained" disableElevation style={{fontSize:props.fontsize,background:props.background}}>
     {props.name}
    </Button>
  );
}
export default Buttons

