import React from "react";
import Buttons from "./button";

export default function SignUp(){
    return(
        <>
            <div className="sign-container">
                <div className="sign-up">
                    <form action="#" method="post">
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
                        <label>PassWord:</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                    <div className="fild">
                      
                    <Buttons name= "Sign-Up"/>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}