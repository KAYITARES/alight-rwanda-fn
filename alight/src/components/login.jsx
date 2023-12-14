import { Button } from "@mui/material";
import React from "react";


export default function Login(){
    return (
        <>
            <div className="login-container">
            <h1>Login Form</h1>
            <div className="login">
            <form action="#" method="post">
                <div className="fld">
                <label htmlFor="email">Email:</label>
                    <input type="text" name="email" placeholder="enter email"/>
                </div>
                <div className="fld">
                <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="enter password"/>
                </div>
                <a href="@">forgot password</a>
                <div className="log">
              <Button className="log-btn">Login</Button>
                </div>
                </form>
                <p>if you don't have account?<a href="@">Sign-Up</a></p>
            </div>
                
            </div>
        </>
    )
}