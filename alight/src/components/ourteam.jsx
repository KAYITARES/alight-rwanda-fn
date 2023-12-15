import React from "react";


export default function Ourteam(props){
return (
    <>
       <div className="our-container">
       
        <div className="term">
        <div className="trm-image">
        <img src={props.image} alt="term"/>
        </div>
         <h3>{props.position}</h3>
         <p>{props.name}</p>
        </div>
       </div>

       
    </>
)
}