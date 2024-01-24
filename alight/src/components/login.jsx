import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Adjust the import
import {jwtDecode} from 'jwt-decode';

export default function Login() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [loginData, setLoginData] = useState({
    Email: '',
    Password: '',
  });
  const [userRole, setUserRole] = useState('');

  const handleInputLogin = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const apiLogin = "http://localhost:3030/api/v1/user/login";
      const response = await axios.post(apiLogin, loginData);

      const { token } = response.data;

      localStorage.setItem('auth-token', token);

      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.user.Role);

      console.log('Login successful', response.data);

      if (userRole === 'admin') {
        alert('Welcome, admin!');
        navigate(window.location.href='dashboards'); // Use navigate instead of history.push
      } else if (userRole === 'user') {
        alert('Welcome, user!');
        navigate(window.location.href='welcome'); // Use navigate instead of history.push
      } else {
        alert('Tap login button again');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  console.log(userRole);

  return (
    <>
      <div className="login-container">
        <h1>Login Form</h1>
        <div className="login">
          <form onSubmit={handleLogin}>
            <div className="fld">
              <label htmlFor="Email">Email:</label>
              <input type="text" name="Email" value={loginData.Email} onChange={handleInputLogin} placeholder="enter email" />
            </div>
            <div className="fld">
              <label htmlFor="Password">Password:</label>
              <input type="password" name="Password" value={loginData.Password} onChange={handleInputLogin} placeholder="enter password" />
            </div>
            <a href="/">forgot password</a>
            <div className="log">
              <Button className="log-btn" type="submit">Login</Button>
            </div>
          </form>
          <p>if you don't have an account?<Link to={'/signup'}>SignUp</Link></p>
        </div>
      </div>
    </>
  );
}
