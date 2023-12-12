import React from "react";
import alight from '../assets/alight.jpeg';
import MenuIcon from '@mui/icons-material/Menu';
// import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import { useState } from "react";
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Box,Typography,Modal } from "@mui/material";
import Buttons from "./button";


const style ={
    position: 'absolute',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,

}


function NavBar(){
const[isMobile,setIsMobile]= useState(false);
// const [isInput, setIsInput] = useState(false)
const [open,setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

    return(
        <>
        <nav>
            <div className="nav-container">
                <div className="navbar">
                    <div className="logo">
                        <img src={alight} alt="al"/>
                    </div>
                    <ul className={isMobile?'openNav':'navlinks'}
                    onClick={()=>setIsMobile(false)}
                    >
                        <li className="drop">
                        <a href="/" className="link">Our Work</a>
                        <ul className="dropdown">
                        <li className="drop1">
                        <a href="/" className="link drops">Sector</a>
                        <ul className="dropdown1">
                        <li><a href="/" className="link drops">Education</a></li>
                        <li><a href="/" className="link drops">Health</a></li>
                        <li><a href="/" className="link drops">Protection</a></li>
                        <li><a href="/" className="link drops">Nutrion</a></li>
                        <li><a href="/" className="link drops">family Planning</a></li>
                        </ul>
                        </li>
                        <li><a href="/" className="link drops">NyabihekeCamp</a></li>
                        <li><a href="/" className="link drops">MahamaCamp</a></li>
                        <li><a href="/" className="link drops">KigemeCamp</a></li>
                        </ul>
                        </li>
                        <li><a href="/" className="link">Platform</a></li>
                        <li className="drop">
                        
                        <a href="/" className="link">We are Alight</a>
                        <ul className="dropdown">
                        <li><a href="./about" className="link drops">ABout Us</a></li>
                        <li><a href="/" className="link drops">Join Us</a></li>
                        <li><a href="/" className="link drops">Testimonial</a></li>
                        <li><a href="./ourteam" className="link drops">Our Term</a></li>
                        </ul>
                        </li>
                        <li><a href="/" className="link">Donate</a></li>
                        <li><a href="/" className="link">Blogs</a></li>
                        <li><a href="/" className="link">Jobs</a></li>
                        
                       <Button onClick = {handleOpen} className="btn" endIcon={<VpnKeyIcon/>}>Sign-In</Button>
                        <Modal
                        open = {open} 
                        onClose={handleClose}
                        aria-labelledby = 'modal-modal-title'
                        aria-describedby = 'modal-modal-description'
                       >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                 <h1 className="head">Sign-Up</h1> 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form action="#" method="post">
            <div className="input">
            <label>Email:</label>
                <input type="text" name="fname" />
            </div>
            <div className="input">
            <label>PassWord:</label>
                <input type="password" name="fname" />
            </div>
           
            
            <div className="butt">
            <Buttons name= "Login"/>
            <a href="@">forgot password</a>
            <p>if you don't have an account?<a href="/" className="link">sign up</a></p>
            </div>
            
            </form>
          </Typography>
          </Box>
                      </Modal>  
                    </ul>
            
                    {/* <TroubleshootIcon className="menu" onClick = {()=>alert("search")}/> */}
                    <MenuIcon className="menu" onClick = {()=>setIsMobile(!isMobile)} />
        
                </div>
            </div>
        </nav>
    </>
    )
   
}
export default NavBar