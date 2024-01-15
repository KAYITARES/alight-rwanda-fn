import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function Login(){




    const[loginData,setloginData] = useState({
        Email :'',
        Password : '',
    });

    const HandleInputLogin = (e) => {
   setloginData({
    ...loginData,
    [e.target.name] : e.target.value
   })
    };

    const HandleLogin =async (e) => {
        e.preventDefault();

        try {
            const apiLogin = "http://localhost:3030/api/v1/user/login";
            const response =await axios.post (apiLogin,loginData);

            const {token,Role} = response.data;

            localStorage.setItem =('auth-token',token);
            if(Role === 'user'){
                alert('u are a user')
            }else if(Role === 'admin'){
                alert('u are an admin')
            }
            console.log('login succeccful',response.data)
        } catch (error) {
           alert( error.response.data.message);

        }
    }

    return (
        <>
       
            <div className="login-container">
            <h1>Login Form</h1>
            <div className="login">
            <form onSubmit={HandleLogin}>
                <div className="fld">
                <label htmlFor="Email">Email:</label>
                    <input type="text" name="Email" value={loginData.Email} onChange={HandleInputLogin} placeholder="enter email"/>
                </div>
                <div className="fld">
                <label htmlFor="Password">Password:</label>
                    <input type="password" name="Password" value={loginData.Password} onChange={HandleInputLogin}  placeholder="enter password"/>
                </div>
                <a href="@">forgot password</a>
                <div className="log">
              <Button className="log-btn" type="submit">Login</Button>
                </div>
                </form>
                <p>if you don't have account?<Link to={'/signup'}>signUp</Link></p>
            </div>
                
            </div>
        </>
    )
}