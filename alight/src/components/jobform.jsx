import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";

export default function FormJob(){
const [upply,setUpply] = useState({
    FirstName : '',
    LastName: '',
    Email: '',
    NationalId: '',
    PhoneNumber: '',
    Country: '',
    DateBirth: '',
    Location: '',
    EducationStatus: '',
    Sex: '',
    CurrentPosition: '',
    Matialstatus: '',
    UploadCV: '',
});
const Handle = (e) =>{
    setUpply({
        ...upply,
        [e.target.name] : e.target.value
    });

}
const Submit = async (e) =>{
e.preventDefault();

try {
    const apiUrl = `http://localhost:3030/api/v1/upply.id`;
    const response = await axios.post(apiUrl,{
        FirstName: upply.FirstName,
        LastName: upply.LastName,
        Email: upply.Email,
        NationalId: upply.NationalId,
        PhoneNumber: upply.PhoneNumber,
        Country: upply.Country,
        DateBirth: upply.DateBirth,
        Location: upply.Location,
        EducationStatus: upply.EducationStatus,
        Sex: upply.Sex,
        CurrentPosition: upply.CurrentPosition,
        Matialstatus: upply.Matialstatus,
        UploadCV: upply.UploadCV,
    },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
    setUpply(response.data)
} catch (error) {
    console.error('error',error)
}
}
console.log(upply)
    return (
        <>
            <div className="form-container">
            <h1>APPLICATION FORM</h1>
                <div className="forms">
                    <form onSubmit={Submit}>
                    <div className="job-fild">
                        <label htmlFor="FirstName">FirstName:</label>
                        <input onChange={Handle} value={upply.FirstName} type="text" name="FirstName" placeholder="FirstName"/>
                        <label htmlFor="LastName">LastName:</label>
                        <input onChange={Handle} value={upply.LastName} type="text" name="LastName" placeholder="LastName"/>
                    </div>
                    <div className="job-fild">
                    <label htmlFor="Email">Email:</label>
                        <input onChange={Handle} value={upply.Email} type="email" name="Email" placeholder="Email"/>
                        <label htmlFor="PhoneNumber">PhoneNumber:</label>
                        <input onChange={Handle} value={upply.PhoneNumber} type="number" name="PhoneNumber" placeholder="PhoneNumber"/>
                    </div>
                    <div className="job-fild">
                        <label htmlFor="NationalId">National-ID:</label>
                        <input onChange={Handle} value={upply.NationalId} type="number" name="NationalId" placeholder="National-ID"/>
                        <label htmlFor="Country">COUNTRY</label>
                        <input onChange={Handle} value={upply.Country} type="text" name="Country" placeholder="Country"/>
                    </div>
                    <div className="job-fild">
                        <label htmlFor="Location">Location:</label>
                        <input onChange={Handle} value={upply.Location} type="text" name="Location" placeholder="type province and Location"/>
                    </div>

                    <div className="job-fild">
                    <label htmlFor="EducationStatus">Education:</label>
                        <input onChange={Handle} value={upply.EducationStatus} type="text" name="EducationStatus" placeholder="EducationStatus"/>
                        <label htmlFor="Sex">Sex:</label>
                        <input onChange={Handle} id="Sex" value={upply.Sex} type="text" name="Sex" placeholder="Sex"/>
                    </div>
                    <div className="job-fild">
                    <label htmlFor="CurrentPosition">CurrentPosition:</label>
                        <input onChange={Handle} value={upply.CurrentPosition} type="text" name="CurrentPosition" placeholder="CurrentPosition"/>
                    </div>

                    <div className="job-fild">
                    <label htmlFor="UploadCV">UploadCV:</label>
                        <input onChange={Handle} value={upply.UploadCV} type="file" name="UploadCV" placeholder="UploadCV"/>
                    </div>

                    <div className="job">
              <Button className="job-btn" type="submit">UPPLY-NOW</Button>
                </div>
                    </form>
                </div>
            </div>
        </>
    )
}