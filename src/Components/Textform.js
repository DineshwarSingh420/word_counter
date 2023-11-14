import React from 'react'
import PropTypes from 'prop-types'
import react, { useState } from 'react'

export default function Textform(props) {
    //Upclick function-
    const Upclick=()=>{
        console.log("upper case clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!","success");
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.voice = speechSynthesis.getVoices().filter(function(voice) {
        return voice.name == "Google UK English Female"
    
      })[0];
      window.speechSynthesis.speak(msg);
      props.showAlert("Listen to Angela!","success");

    }

    //copy text
    const handlecopy=()=>{
      console.log('text', text)
      var textField = document.createElement('textarea')
      textField.innerText = text
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
     
    }
    
    //handleChange function-
    const handleChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("Enter text Here");  // hooks in react that cause updation in value;

  return (
    <>
   <div className="container p-3 mb-2 bg-secondary text-white my-3">
            
                <style>{'body { background-color: #6610f2; }'}</style>
         
        
    <div className="container  my-3">
<h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value= {text} onChange={handleChange}id="mybox" rows="8"></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary" onClick={Upclick}>Covert to UpperCase</button>
<button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handlecopy} >Copy Text</button>


    </div>

    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>{0.08*text.split(" ").filter((element)=>{return element.length!=0}).length } minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      
    </div>
    </div>
    </>
  )
}
