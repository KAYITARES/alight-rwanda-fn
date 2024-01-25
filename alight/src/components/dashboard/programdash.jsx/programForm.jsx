import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";




export default function ProgramsForm(){

    const[blogData,setBlogData] = useState({
        ProgramName :'',
        ProgramTitle : '',
        ProgramSummaryDiscription : '',
        ProgramDiscription : [],
        ProgramImage : [],
        PostedDate : '',

    });

    const HandleInputLogin = (e) => {
   setBlogData({
    ...blogData,
    [e.target.name] : e.target.value
   })
    };

    const HandleLogin =async (e) => {
        e.preventDefault();

        try {
            const apiBlogs = "http://localhost:3030/api/v1/program";
            const response =await axios.post (apiBlogs,blogData);

            const {token,Role} = response.data;

            localStorage.setItem =('auth-token',token);
            if(Role === 'user'){
                alert('YOU DO NOT HAVE ACCESS')
            }else if(Role === 'admin'){
                alert('posted')
            }
            console.log('Blogs posted succeccful',response.data)
        } catch (error) {
           alert( error.response.data.message);

        }
    }

    return (
        <>
       
            <div className="login-container">
            <h1>Program Form</h1>
            <div className="login">
            <form onSubmit={HandleLogin}>
                <div className="fld">
                <label htmlFor="ProgramName">ProgramName:</label>
                    <input type="text" name="ProgramName" value={blogData.BlogTitle} onChange={HandleInputLogin} placeholder="enter ProgramName"/>
                </div>
                <div className="fld">
                <label htmlFor="ProgramTitle">ProgramTitle:</label>
                    <input type="text" name="ProgramTitle" value={blogData.BlogSummary} onChange={HandleInputLogin}  placeholder="enter ProgramTitle"/>
                </div>
                <div className="fld">
                <label htmlFor="ProgramSummaryDiscription">ProgramSummaryDiscription:</label>
                    <input type="text" name="ProgramSummaryDiscription" value={blogData.BlogDiscription} onChange={HandleInputLogin}  placeholder="enter ProgramSummaryDiscription"/>
                </div>
                <div className="fld">
                <label htmlFor="ProgramDiscription">ProgramDiscription:</label>
                    <input type="text" name="ProgramDiscription" value={blogData.BlogImage} onChange={HandleInputLogin}  placeholder="enter ProgramDiscription"/>
                </div>
                <div className="fld">
                <label htmlFor=" ProgramImage"> ProgramImage:</label>
                    <input type="text" name=" ProgramImage" value={blogData.BlogImage} onChange={HandleInputLogin}  placeholder="enter ProgramImage"/>
                </div>
               
                <div className="log">
              <Button className="log-btn" type="submit">Post-PROGRAM</Button>
                </div>
                </form>
            </div>
                
            </div>
        </>
    )
}