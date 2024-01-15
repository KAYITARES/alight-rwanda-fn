import { Button } from "antd";
import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Post(){

    const [isBlogs,setIsBlogs] = useState({
        BlogTitle : '',
        BlogSummary : '',
        BlogDiscription : '',
        BlogImage : '',
        PostedDate : '',
    });

    const HandleInputBlog = (e) =>{
       setIsBlogs ({
        ...isBlogs,
        [e.target.name] : e.target.value
       })
    };
    const Submit = async (e) =>{
        e.preventDefault();

        try {
            const api = "";
            const response = await axios.post(api,isBlogs);

            const {token,Role} = response.data;

            localStorage.setItem = ('auth-token',token);
            if(Role === 'user'){
                alert('u are a user')
            }else if(Role === 'admin'){
                alert('u are an admin')
            }
            console.log('BlogPosted succeccful',response.data)
        } catch (error) {
           alert( error.response.data.message);

        }
    }
    return (
        <>
       <div className="post-form">
                <div className="forms">
                <h2>blog-form</h2>
                <form onSubmit={Submit}>
                <div className="form">
                    <label>Blog-Title</label>
                    <input onChange={HandleInputBlog} value={isBlogs.BlogTitle} type="text" name="title" placeholder="Blog-title" className="input"/>
                </div>
                <div className="form">
                    <label>Blog-Summary</label>
                    <input onChange={HandleInputBlog} value={isBlogs.BlogSummary} type="text" name="summary" placeholder="Blog-Summary" className="input"/>
                </div>
                <div className="form">
                    <label>Blog-Description</label>
                    <input onChange={HandleInputBlog} value={isBlogs.BlogDiscription} type="text" name="title" placeholder="Blog-Description" className="input"/>
                </div>
                <div className="form">
                  
                    <input onChange={HandleInputBlog} value={isBlogs.BlogImage} type="file" name="image" className="file"/>
                </div>
                <div className="post-btn">
                  
                    <Button className="btn" type="submit">POST-BLOG</Button>
                </div>
                </form>
               
                </div>
          
                </div>
        </>
    )
}