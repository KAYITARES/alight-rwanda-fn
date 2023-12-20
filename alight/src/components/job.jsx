import React from "react";
import jobs from '../assets/jobs/job.json'
import { Button } from "@mui/material";
import { Image } from 'antd';

export default function Job(){
    return (
        <>
                   <div className="test-container">
             {jobs.map((jobx)=>(
               
                <div className="test">
            <div className="job-image">
            <Image
    width={'100%'} height={'100%'}
    src={jobx.newsImage}
  />
                
            </div>
            <div className="test-text">
        <div className="tit">
        <h1 className="title">{jobx.newsSummaryDescription}</h1>
        <h1 className="title">{jobx.jobTitle}</h1>
         <p className="desc">{jobx.postedAt}</p>
         <p className="desc">{jobx.deadline}</p>
              
        </div>
                
               <Button className="job-btn">APPLY-NOW</Button>
            </div>
          </div>
                
             ))}
          

          </div>
        </>
    )
}