import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleOnClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
  const handleExtra = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success");
  }
  const handleOnCopy = () => {

    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  }
  const handleOnChange = (event) => {
    console.log("It was changed");
    setText(event.target.value);

  }

  const [text, setText] = useState('Enter text here');

  return (
    <>

      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>

        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClick} >Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handlelowClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleOnClear} >Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleOnCopy} >Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleExtra} >Remove Extra Spaces</button>
      </div>
      <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text to preview it"}</p>
      </div>
    </>
  )
}
