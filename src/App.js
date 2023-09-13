import './App.css';
import Textform from './Components/Textform';
import Navbar from './Components/navbar.js'

function App() {
  return (
    <>
<Navbar title="Home_page" about="about_us" />

<div className="container">
<Textform heading="Enter the Text Here"/>
</div>
    </>
  );
}

export default App;
