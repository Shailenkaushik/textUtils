//import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert'
import React, { useState } from 'react';
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState('light');// wheather dark mode is enabled or not
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showalert("Dark mode has been enabled", "success");
      document.title = 'Text-Utils-Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
      document.title = 'Text-Utils-Light Mode';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        {/*<div className="container">
 <Textform heading="Enter your text here"mode={mode} showalert={showalert} text="this is text"></Textform>
 </div>
 <div className='container'>
  <About></About>
  </div>*/}
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}  />} />

            <Route exact path="/" element={<Textform heading="Enter text to analyze" mode={mode} showAlert={showalert} />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;

