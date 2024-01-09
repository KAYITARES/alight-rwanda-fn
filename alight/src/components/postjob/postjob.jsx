import React from "react";
import { Button } from "antd";

export default function Pjob(){
   return(
    <>
   <div className="job-container">
           <h1>Jobs</h1>
            <div className="post-controller ">
                <div className="post-form">
                <div className="forms">
                <h2>job-form</h2>
                <div className="form">
                    <label>Job-Name</label>
                    <input type="text" name="title" placeholder="Blog-title" className="input"/>
                </div>
                <div className="form">
                    <label>Job-Title</label>
                    <input type="text" name="summary" placeholder="Blog-Summary" className="input"/>
                </div>
                <div className="form">
                <label>Job-SummaryDescription</label>
                    <input type="text" name="title" placeholder="Blog-Description" className="input"/>
                </div>
                <div className="form">
                <label>Job- Information</label>
                    <input type="text" name="title" placeholder="Blog-Description" className="input"/>
                </div>
                <div className="form">
                <label>Job-picture</label>
                    <input type="file" name="title" placeholder="Blog-Description" className="input"/>
                </div>
                <div className="form">
                <label>Job-location</label>
                    <input type="text" name="title" placeholder="Blog-Description" className="input"/>
                </div>
                <div className="form">
                <label>Job-PublishedDate</label>
                    <input type="text" name="title" placeholder="Blog-Description" className="input"/>
                </div>
                <div className="form">
                <label>Job-DeadLine</label>
                    <input type="text" name="title" placeholder="Blog-Description" className="input"/>
                </div>
                
                <div className="post-btn">
                  
                    <Button className="btn">POST-JOB</Button>
                </div>
                </div>
          
                </div>
                <div className="post-table">
                <div className="table-container">
            <h1>JOBS table</h1>
            <div className="tables">
            <table border={1}>
                <tr>
                    <th>Job-Name</th>
                    <th>Job-Title</th>
                    <th>Job-SummaryDescription</th>
                    <th>Job-Information</th>
                    <th>Job-Pictures</th>
                    <th>Job-Location</th>
                    <th>Job-PublishedDate</th>
                    <th>Job-DeadLine</th>
                    <th colSpan={2}>OPTION</th>
                </tr>
                <tr>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
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
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
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
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
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