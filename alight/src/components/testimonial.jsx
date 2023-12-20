import React from "react";
import { Image } from "antd";
import ReadMore from "./readmore";
import testi from '../assets/testi/testi.json'

export default function Testmonial(){
    const longText = 'Alight it opened a news school of coding in 2 camps it called nyabiheke coding school and also opened in'
    return(
        <>
             <div className="test-container">
             {testi.map((testx)=>(
               
                <div className="test">
            <div className="test-image">
            <Image width={'100%'} height={'100%'} src={testx.newsImage}/>
             
            </div>
            <div className="test-text">
            
        <ReadMore text ={longText} maxLength={50}/>
        <div className="tit">
        <h1 className="title">{testx.publisher}</h1>
         <p className="desc">{testx.position}</p>
              
        </div>
                
               
            </div>
          </div>
                
             ))}
          

          </div>
        </>
    )
}