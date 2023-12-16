import React, { useState } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import {Login} from "./Login";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const [currentForm, setCurrentForm] = useState('register');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

<div className="App">
      {
        currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
      }
    </div>

    const handleBuildAccountClick = () => {
        // Redirect to the register page when the "Build Account" button is clicked
        // You can use history.push or Redirect component based on your routing setup
        // Here, we're assuming you're using BrowserRouter
        window.location.href = '/login';
      };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={handleBuildAccountClick}>Already have an account? Login here.</button>
    </div>





    )
}