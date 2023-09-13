import React from 'react'
import PropTypes from 'prop-types'
import react, { useState } from 'react'

export default function Textform(props) {
    //Upclick function-
    const Upclick=()=>{
        console.log("upper case clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    
    //handleChange function-
    const handleChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("enter text here2");  // hooks in react that cause updation in value;

  return (
    <>
   <div className="container p-3 mb-2 bg-secondary text-white my-3">
            
                <style>{'body { background-color: #6610f2; }'}</style>
         
        
    <div className="container  my-3">
<h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value= {text} onChange={handleChange}id="mybox" rows="8"></textarea>
</div>

<button className="btn btn-primary" onClick={Upclick}>Covert to UpperCase</button>
    </div>

    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08*text.split(" ").length }minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      
    </div>
    </div>
    </>
  )
}
