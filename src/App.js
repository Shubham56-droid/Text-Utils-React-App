import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar.js';
import About from './components/About.js'
import TextForm from './components/TextForm.js'

function App() 
{
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if( mode=== 'dark')
    {
      setMode('light');
      document.body.style.background = "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
    }
    else
    {
      setMode('dark');
      document.body.style.background = "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
    }
  }


  return (
    <>
      <Navbar title="TextUtils"  about="About Us" mode={mode} togglemode={togglemode}/>
      <TextForm heading="Text Analysis And Convertor" summaryHead="Summery Of Your Text" mode={mode}/>
      {/* <About mode={mode}/> */}
      <Footer creatername="Shubham Bawankar"/>
    </>
  );
}

export default App;
