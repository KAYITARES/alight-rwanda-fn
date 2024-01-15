import React from "react";
import jobs from '../assets/jobs/job.json'
import { Button } from "@mui/material";
import { Image } from 'antd';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Modal} from 'antd'
import { useState } from "react";
import { useEffect } from "react";
import FormJob from "./jobform";

export default function Job(){


  // const [isInput, setIsInput] = useState(false)
  const [IsJob, setIsJob] = useState(false);
  
  const handleOpen = ()=>{
      setIsJob(true)
  }
  const handleClose = () =>{
      setIsJob(false)
  }
  
  useEffect(()=>{
    AOS.init({duration:1200})
},[])
    return (
        <>
  <Modal open={IsJob} onCancel={handleClose} footer = {null}>
  {
    setIsJob && (
                <FormJob/>
            )
  }

  </Modal>

                   <div className="test-container" >
             {jobs.map((jobx)=>(
               
                <div className="test" data-aos='zoom-in-up'>
            <div className="job-image">
            <Image
    className=""
    src={jobx.jobpicture}
  />
                
            </div>
            <div className="test-text">
        <div className="tit">
        <h1 className="title">{jobx.jobSummaryDescription}</h1>
        <h1 className="title">{jobx.jobTitle}</h1>
         <p className="desc">{jobx.jobAllInfo}</p>
         <p className="desc">{jobx.jobLocation}</p>
         <p className="desc">{jobx.jobCriteria}</p> 
         <p className="desc">{jobx.deadLine}</p>
         <p className="desc">{jobx.publisherDate}</p>
        </div>
                
               <Button className="job-btn"  onClick={handleOpen}>APPLY-NOW</Button>
            </div>
          </div>
                
             ))}
          

          </div>
        </>
    )
}