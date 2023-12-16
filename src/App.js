import react, { useState,useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Textform from './Components/Textform';
import Navbar from './Components/navbar.js';
import Alert from './Components/Alert';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "./Components/Login";
import {Register} from "./Components/Register";
import logoImage from "./Components/pic.png"; 

function App() {

  
  
  const[Mode, setMode]=useState('light'); // whether dark mode is enable or not
  const[alert, setAlert]=useState(null); // whether dark mode is enable or not

 const showAlert=(message,type)=>{  //passing message and its type
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 1500);

 }
 
  const toggleMode=()=>{
if(Mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor='black'
  showAlert("Dark mode has been enabled","success ")
  // document.title='Dark Mode Enable'
}
else{
  setMode('light')
  document.body.style.backgroundColor='white'
  showAlert("Light mode has been enabled","success");

}
  }

  const ImageStyle = {
      height: '50px', // Adjust the height as needed
    };
  
  
  return (
    <>
       <BrowserRouter>
         
<Navbar  title={<img src={logoImage} alt="Logo" style={ImageStyle} />} about="about_us" login="login_here" mode={Mode} toggleMode={toggleMode}  />


{/* <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div> */}

<Alert alert={alert}/>

<div className="container">

          <Routes>
            <Route exact path="/about" element={<About mode={Mode} />} />
            <Route exact path="/login" element={<Login mode={Mode}/>} />
            <Route exact path="/Register" element={<Register mode={Mode}/>} />
           
          

          
          <Route exact path="/"
         element={ <Textform showAlert={showAlert} heading="Enter the Text Here"/>}
          />

          </Routes>

          
          
          
        
        
</div>

</BrowserRouter>  
</>
  );
}

export default App;
