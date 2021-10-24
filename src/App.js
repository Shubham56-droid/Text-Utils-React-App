import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar.js';
import About from './components/About.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert.js';

function App() 
{
  const [mode, setMode] = useState('light');
  /* ---------Alert into website----------- */
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {

    /* Object created to set alert : */
    setAlert({
        msg : message,
        type: type
    })

    /* Auto dismissing the alert after some time : */

    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const togglemode = () => {
    if( mode=== 'dark')
    {
      setMode('light');
      document.body.style.background = "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
      showAlert("Light mode has been enabled","success");
    }
    else
    {
      setMode('dark');
      document.body.style.background = "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      showAlert("Dark mode has been enabled","success");
    }
  }


  return (
    <>
      <Navbar title="TextUtils"  about="About Us" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <TextForm heading="Text Analysis And Convertor" summaryHead="Summery Of Your Text" mode={mode} showAlert={showAlert}/>
      {/* <About mode={mode}/> */}
      <Footer creatername="Shubham Bawankar"/>
    </>
  );
}

export default App;
