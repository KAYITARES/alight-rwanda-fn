import React from "react";
import alight from '../assets/alight.jpeg'

function NavBar(){
    return(
        <>
        <nav>
            <div className="nav-container">
                <div className="navbar">
                    <div className="logo">
                        <img src={alight} alt="al"/>
                    </div>
                    <ul className="navlinks">
                        <li><a href="@" className="link">Our Work</a></li>
                        <li><a href="@" className="link">Platform</a></li>
                        <li><a href="@" className="link">We are Alight</a></li>
                        <li><a href="@" className="link">Donate</a></li>
                        <li><a href="@" className="link">Blogs</a></li>
                        <li><a href="@" className="link">Jobs</a></li>
                    </ul>
                    <div className="search">
                        <input type="search" name="search" className="search" placeholder="search..." /><button>search</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
   
}
export default NavBar