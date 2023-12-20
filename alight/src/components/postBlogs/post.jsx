import { Button } from "antd";
import React from "react";


export default function Post(){
    return (
        <>
           <div className="post-container">
           <h1>Blogs</h1>
            <div className="post-controller ">
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
                <div className="post-table">
                <div className="table-container">
            <h1>Blog tables</h1>
            <div className="tables">
            <table border={1}>
                <tr>
                    <th>Blog-Title</th>
                    <th>Blog-Summary</th>
                    <th>Blog-Description</th>
                    <th colSpan={2}>OPTION</th>
                </tr>
                <tr>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td className="opt"><Button className="del">DELETE</Button></td>
                    <td className="opts"><Button className="del">UPDATE</Button></td>
                </tr>
                <tr>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td className="opt"><Button className="del">DELETE</Button></td>
                    <td className="opts"><Button className="del">UPDATE</Button></td>
                </tr>
                <tr>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td className="opt"><Button className="del">DELETE</Button></td>
                    <td className="opts"><Button className="del">UPDATE</Button></td>
                </tr>
                </table>
            </div>
                
            </div>
                    </div>
            </div>
           </div>
        </>
    )
}