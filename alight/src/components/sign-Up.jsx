import React from "react";
import Buttons from "./button";

export default function SignUp(props){
    return(
        <>
            <div className="sign-container">
            <div className="sign">
            
            <div className="left">
           
            <form action="#" method="post">
            <h1>signUp</h1>
                    <div className="fild">
                        <label>FirstName:</label>
                        <input type="text" name="fname" placeholder="FirstName"/>
                    </div>
                    <div className="fild">
                        <label>LastName:</label>
                        <input type="text" name="fname" placeholder="LastName"/>
                    </div>
                    <div className="fild">
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="fild">
                        <label>Create-PassWord:</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                    <div className="fild">
                        <label>Confirm-PassWord:</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                    <div className="sign-btn">
                    <Buttons name= "Sign-Up"/>
                    </div>
                    <p className="al">already you have account?<a href="@">Login</a></p>
                    </form>
                    
                </div>
                <div className="right">
                <h1>Continue with</h1>
                <Buttons name="SignIn With Google" className="btn" fontsize = '1.4rem' background='#FC4A12'/>
                <Buttons name="SignIn With instagram" className="btn" fontsize = '1.4rem' background='#295AD7'/>
                <Buttons name="SignIn With twitter" className="btn" fontsize = '1.4rem' background='#4DCEEA'/>
                </div>
            </div>
          
            </div>
        </>
    )
}