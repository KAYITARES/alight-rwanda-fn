import React from "react";
import { Image } from "antd";
import 'aos/dist/aos.css';
import AOS from 'aos';
import axios from 'axios'
import { useEffect,useState } from "react";

function truncateText(text, maxLength) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLength);
    return truncatedWords.join(' ') + (words.length > maxLength ? '...' : '');
}

export default function Testmonial(){
    const[isTestimonial,setIsTestimonial] = useState(null)
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    useEffect(()=>{
        const fetchTestimonial = async () =>{
            try {
                const response = await axios.get('http://localhost:3030/api/v1/testimonial')
                setIsTestimonial(response.data)
            } catch (error) {
                
            }
        }
        fetchTestimonial([])
    }, [])
    console.log(isTestimonial)
    return(
        <>
             <div className="test-container">
             {isTestimonial ? (isTestimonial.data.map((testx)=>(
               
                <div className="test" data-aos = "fade-right-up">
            <div className="test-image">
            <Image width={'100%'} height={'100%'} src={testx.TestimonerImage}/>
             
            </div>
            <div className="test-text">
            
      
        <div className="tit">
        <h1 className="title">{testx.TestimonerName}</h1>
        <p className="desc">{truncateText(testx.Testimonials,20)}</p>
         <p className="desc">{testx.TestimonerPosition}</p>
        
              
        </div>
        <p style={{marginTop:'60px', fontSize : '1rem'}}>{testx.PostedDate}</p> 
               
            </div>
          </div>
                
             ))):(
                <p>Loading</p>
             )}
          

          </div>
        </>
    )
}