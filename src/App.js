// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
  }
  const [txt, settxt] = useState('Enable dark mode')
  const change = () => {
    if (mode === 'light') {
      setmode('dark')
      settxt('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
      showalert('Dark mode has been enabled','success')
    }
    else {
      setmode('light')
      settxt('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showalert('Light mode has been enabled','success')
    }
  }
  return (
    <>
      <Navbar title="TextUtils" AboutUs="About TextUtils" modeup={mode} toggle={change} text={txt} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse:" summary="Your Text Summary" modeup={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}
export default App;
