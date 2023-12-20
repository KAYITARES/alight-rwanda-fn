import React from "react";
import { Image } from "antd";
import { Button } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Blog from '../assets/constant/blogs.json';

export default function Blogs(){
    return (
        <>
          
          <div className="blog-container">
        
            {Blog.reverse().map((blogx) => (
              <div className="blog">
              <div className="blog-image">
              <Image width = {'100%'} height={'100%'} src= {blogx.newsImage}/>
             
              </div>
              <div className="blog-content">
              <h3 className="title">{blogx.newsMainTitle}</h3>
              <p className='short'>{blogx.newsSummaryDescription}</p>

              <div className='icons'>
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