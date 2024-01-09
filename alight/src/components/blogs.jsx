import React from "react";
import { Image } from "antd";
import { Button } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Blog from '../assets/constant/blogs.json';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Blogs(){
    useEffect(()=>{
        AOS.init({duration:1200})
    },[])
    return (
        <>
          
          <div className="blog-container">
        
            {Blog.reverse().map((blogx) => (
              <div className="blog">
              <div className="blog-image" data-aos="zoom-in">
              <Image width = {'100%'} height={'100%'} src= {blogx.newsImage}/>
             
              </div>
              <div className="blog-content"  data-aos="zoom-out">
              <h3 className="title">{blogx.newsMainTitle}</h3>
              <p className='short'>{blogx.newsSummaryDescription}</p>

              <div className='icons'  data-aos="flip-left">
                            <div className='likes'>
                                <ThumbUpIcon style={{ fontSize: "24px" }} />
                                <p>{blogx.likes.length}</p>
                            </div>
                            <div className='dislikes'>
                                <ThumbDownOffAltIcon style={{ fontSize: "24px" }} />
                                <p>{blogx.dislikes.length}</p>
                            </div>
                            <div className='comment'>
                                <MapsUgcIcon style={{ fontSize: "24px" }} />
                                <p>{blogx.comment.length}</p>
                            </div>
                        </div>
                        <div className='blog-btn'>
                            <Button> readmore</Button>
                        </div>
              </div>
                    <div className="decription">

                    </div>
                    </div>
                
          ))}
         

          </div>
        </>
    )
}