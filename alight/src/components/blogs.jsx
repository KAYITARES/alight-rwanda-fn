import React from "react";
import dodo from '../assets/education.jpeg'
import { Button } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

export default function Blogs(props){
    return (
        <>
          
          <div className="blog-container">
          <div className="blog">
            <div className="blog-image">
                <img src={dodo} alt="blog"/>
            </div>
            <div className="blog-text">
                <h1 className="title">{props.title}</h1>
                <p className="desc">{props.desc}</p>
                <div className="icon">
                <span><ThumbUpIcon/>1,000</span>
                <span><ThumbDownOffAltIcon/>0</span>
                <span><MapsUgcIcon/>100</span>
                </div>
               <div className="blog-btn">
                    <Button>readmore</Button>
               </div>
            </div>
          </div>

          </div>
        </>
    )
}