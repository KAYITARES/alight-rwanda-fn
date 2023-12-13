import React from "react";
import bad from '../assets/bad.jpg'
import ReadMore from "./readmore";

export default function Testmonial(){
    const longText = 'Alight it opened a news school of coding in 2 camps it called nyabiheke coding school and also opened in'
    return(
        <>
             <div className="test-container">
          <div className="test">
            <div className="test-image">
                <img src={bad} alt="test"/>
            </div>
            <div className="test-text">
            
        <ReadMore text ={longText} maxLength={50}/>
                <h1 className="title">name</h1>
                <p className="desc">position</p>
              
               
            </div>
          </div>

          </div>
        </>
    )
}