import React, { useState } from 'react'
import { BrowserRouter, Navigate } from "react-router-dom";
import {Register} from "./Register";

export const Login = (props) =>   {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    
   
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
const handleBuildAccountClick = () => {
    // Redirect to the register page when the "Build Account" button is clicked
    // You can use history.push or Redirect component based on your routing setup
    // Here, we're assuming you're using BrowserRouter
    window.location.href = '/Register';
  };
    return (

        
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#3c3c3c'}}>
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={handleBuildAccountClick}>Don't have an account? Register here.</button>
        </div>
        </div>

    )
    
}