import { Button } from "antd";
import React from "react";


export default function Post(){
    return (
        <>
       <div className="post-form">
                <div className="forms">
                <h2>blog-form</h2>
                <div className="form">
                    <label>Blog-Title</label>
                    <input type="text" name="title" placeholder="Blog-title" className="input"/>
                </div>
                <div className="form">
                    <label>Blog-Summary</label>
                    <input type="text" name="summary" placeholder="Blog-Summary" className="input"/>
                </div>
                <div className="form">
                    <label>Blog-Description</label>
                    <input type="text" name="title" placeholder="Blog-Description" className="input"/>
                </div>
                <div className="form">
                  
                    <input type="file" name="image" className="file"/>
                </div>
                <div className="post-btn">
                  
                    <Button className="btn">POST-BLOG</Button>
                </div>
                </div>
          
                </div>
        </>
    )
}