import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Textform from './Components/Textform';
import Navbar from './Components/navbar.js'

function App() {
  const[Mode, setMode]=useState('light'); // whether dark mode is enable or not

 const toggleMode=()=>{
if(Mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor='black'
}
else{
  setMode('light')
  document.body.style.backgroundColor='white'

}
  }

  return (
    <>
<Navbar title="Home_page" about="about_us" mode={Mode} toggleMode={toggleMode}/>

<div className="container">
<Textform heading="Enter the Text Here"/>

</div>
{/* <About/> */}
    </>
  );
}

export default App;
