import React from "react";
import alight from '../assets/alight.jpeg';
import MenuIcon from '@mui/icons-material/Menu';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import { useState } from "react";


function NavBar(){
const[isMobile,setIsMobile]= useState(false)
// const [isInput, setIsInput] = useState(false)


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
                        <a href="@" className="link">Our Work</a>
                        <ul className="dropdown">
                        <li className="drop1">
                        <a href="@" className="link drops">Sector</a>
                        <ul className="dropdown1">
                        <li><a href="@" className="link drops">Education</a></li>
                        <li><a href="@" className="link drops">Health</a></li>
                        <li><a href="@" className="link drops">Protection</a></li>
                        <li><a href="@" className="link drops">Nutrion</a></li>
                        <li><a href="@" className="link drops">family Planning</a></li>
                        </ul>
                        </li>
                        <li><a href="@" className="link drops">NyabihekeCamp</a></li>
                        <li><a href="@" className="link drops">MahamaCamp</a></li>
                        <li><a href="@" className="link drops">KigemeCamp</a></li>
                        </ul>
                        </li>
                        <li><a href="@" className="link">Platform</a></li>
                        <li className="drop">
                        
                        <a href="@" className="link">We are Alight</a>
                        <ul className="dropdown">
                        <li><a href="@" className="link drops">ABout Us</a></li>
                        <li><a href="@" className="link drops">Join Us</a></li>
                        <li><a href="@" className="link drops">Testimonial</a></li>
                        <li><a href="@" className="link drops">Our Term</a></li>
                        </ul>
                        </li>
                        <li><a href="@" className="link">Donate</a></li>
                        <li><a href="@" className="link">Blogs</a></li>
                        <li><a href="@" className="link">Jobs</a></li>
                    </ul>
                    <div className="search">
                        <input type="search" name="search" className="searchs" placeholder="search..."/><button><TroubleshootIcon className="srch"/></button>
                    </div>
                    <TroubleshootIcon className="menu" onClick = {()=>alert("search")}/>
                    <MenuIcon className="menu" onClick = {()=>setIsMobile(!isMobile)} />
        
                </div>
            </div>
        </nav>
    </>
    )
   
}
export default NavBar