import React from "react";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import alight from '../assets/alight.jpeg';
import { Box,Typography,Modal } from "@mui/material";
import {Link} from 'react-router-dom'
import ReadMore from "./readmore";

import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

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


export default function Footer() {
    const [open,setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


const LongText = "Alight’s annual report outlines the organization’s activities throughout the preceding year. It is intended to give refugees, donors, partners, stakeholders, Alight’s annual report outlines the organization’s activities throughout the preceding year. It is intended to give refugees, donors, partners, stakeholders,"
  return (
    <>
      <footer>
        <div className="footer-container">
        <div className="footer">
          <div className="footer-header">
            <PermPhoneMsgIcon className="icon" />0783446449
            <EmailIcon className="icon" />alightrwanda@gmail.com
            <LocationOnIcon className="icon" />Kigali,Rwanda KN(454 ST)
          </div>
          <div className="footer">
          <div className="footer-text">
          <div className="text">
<h3>About-Us</h3>
            <ReadMore text={LongText} maxLength={100}></ReadMore>
          </div>
          {/* <div className="rsc"> */}
          <div className="resource">
                <h3>Resources</h3>
            <ul>
           
            <Link><li>Blogs</li> </Link>
                <Link><li>campany</li></Link>
                <Link><li>Testimonial</li></Link>
            </ul>
                </div>
                <div className="resource">
                <h3>Campany</h3>
            <ul>
               <Link> <li>Our-Services</li></Link>
               <Link><li>Contact-Us</li></Link>
               <Link><li>Our-Team</li></Link>
            </ul>
                </div>
          </div>
            
        
           
          {/* </div> */}
          </div>
        
          </div>
          <div className="icons">
            <FacebookIcon className="icon"/>
            <InstagramIcon className="icon"/>
            <TwitterIcon className="icon"/>
          </div>
          <div className="contact">
          <Button variant="contained" endIcon={<EmailIcon />} onClick={handleOpen}>
        Contact-Us
      </Button>
      <Modal
                        open = {open} 
                        onClose={handleClose}
                        aria-labelledby = 'modal-modal-title'
                        aria-describedby = 'modal-modal-description'
                       >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                 <h1 className="head">Contact-Us</h1> 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form action="#" method="post">
            <div className="input">
            <label>Email:</label>
                <input type="text" name="fname" />
            </div>
            <div className="input">
            <label>Names:</label>
                <input type="password" name="fname" />
            </div>
            <div className="input">
            <label>Messages:</label>
             <textarea type="message" className="area"></textarea>
            </div>
           
            
            <div className="butt">
            <Button variant="contained" endIcon={<SendIcon />} style={{width:'100%', fontSize:'1.5rem'}}>send</Button>
            </div>
            <div className="iconss">
            <FacebookIcon className="icon"/>
            <InstagramIcon className="icon"/>
            <TwitterIcon className="icon"/>
          </div>
            </form>
          </Typography>
          </Box>
                      </Modal>  
          </div>
          <p className="copy">&copy;{new Date().getFullYear()}@alightrwanda All right deserved</p>
          <div className="footer-image">
            <img src={alight} alt="la"/>
          </div>
        </div>
        
      </footer>
    </>
  );
}
