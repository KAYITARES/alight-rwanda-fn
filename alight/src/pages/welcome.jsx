import React from "react";
import NavBar from "../components/navbar";
import Home from "../components/home";

import Program from "../components/program";
import violence from '../assets/violence.jpeg';
import health from '../assets/health.jpeg';
import nutr from '../assets/nutr.jpeg'
import education from '../assets/education.jpeg'
import Who from "../components/whoWeAre";
import Footer from "../components/footer";


function Welcome(){
    return(
        <>
            <NavBar/>
            <Home/>
            <div className="cardss">
            <h1>OUR PROGRAMS</h1>
            <div className="cards"> 
            <Program image = {health} name = "Health Care" desc= "nutrition for nyabiheke camp"/>
            <Program image = {violence} name = "violence" desc= "nutrition for nyabiheke camp"/>
            <Program image = {nutr} name = "Nutrition" desc= "nutrition for nyabiheke camp"/>
            <Program image = {education} name = "education" desc= "nutrition for nyabiheke camp"/>
            <Program image = {health} name = "family planning" desc= "nutrition for nyabiheke camp"/>
            </div>
            </div>
          <Who/>
           <Footer/>
        </>
    )
}
export default Welcome