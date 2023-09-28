import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Textform from './Components/Textform';
import Navbar from './Components/navbar.js';
import Alert from './Components/Alert';

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
}
else{
  setMode('light')
  document.body.style.backgroundColor='white'
  showAlert("Light mode has been enabled","success");

}
  }

  return (
    <>
<Navbar title="Home_page" about="about_us" mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container">
<Textform showAlert={showAlert} heading="Enter the Text Here"/>

</div>
{/* <About/> */}
    </>
  );
}

export default App;
