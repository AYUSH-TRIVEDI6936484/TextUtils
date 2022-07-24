// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const [txt, settxt] = useState('Enable dark mode')
  const change = () => {
    if (mode === 'light') {
      setmode('dark')
      settxt('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setmode('light')
      settxt('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" AboutUs="About TextUtils" modeup={mode} toggle={change} text={txt} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse:" summary="Your Text Summary" modeup={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}
export default App;
