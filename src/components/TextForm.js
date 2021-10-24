import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    //   console.log("you have click on onchange");
      setText(event.target.value);
  }

  const handleUpChange = () =>{
    // console.log("you have clicked on uppercase");
    let newUppertext = text.toUpperCase();
    setText(newUppertext);
  }

  const handleLoChange = () => {
    // console.log("you have clicked on lowercase");
    let newLowertext = text.toLowerCase();
    setText(newLowertext);
  }

  const handleClear = () => {
    //   console.log("You have clicked on clear");
      let cleartext = "";
      setText(cleartext);
  }

  const handleOnChangeAlert = () => {
      alert("You cannot make changes in preview");
  }

  const handlecopyfunction = () => {
    var copyText = document.getElementById("text");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    if(copyText.value != '')
    {
      alert("Copied the text: " + copyText.value);
    }
    else
    {
      alert('Pls write some text into textbox');
    } 
  }

  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  let  styledark = {
    color: '#fff',
    backgroundColor:'#3A3B3C',
    fontWeight: '400',
    fontSize:'20px'
  }

  let stylelight = {
    color: '#000',
    backgroundColor:'#fff',
    fontWeight: '400',
    fontSize:'18px'
  }

  let style2dark = {
    color: '#fff'
  }

  let style2light = {
    color:'#000'
  }




 




  return (
    <div className="main">
    <div className="container my-5">
        <h1 className="text-center" style={props.mode==='dark'?style2dark:style2light}>{props.heading}</h1>
      <div className="mb-3 my-3" >
        <label htmlFor="text" className="form-label">
          <b className="keebo" style={props.mode==='dark'?style2dark:style2light}>Enter Your Text Here:</b>
        </label>
        <textarea
          className="form-control"
          id="text"
          rows="7"
          style={props.mode==='dark'?styledark:stylelight}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpChange}>Convert Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoChange}>Convert LowerCase</button>
      <button className="btn btn-danger" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-success mx-3" onClick={handlecopyfunction}>Copy To Clipboard</button>
      <button className="btn btn-primary" onClick={handleExtraspaces}>Remove Extra Spaces</button>
     
    </div>
    <div className="container my-2 " style={props.mode==='dark'?style2dark:style2light}>
        <h1>{props.summaryHead}</h1>
        <p>Nummber of words : {text.split(' ').length-1}</p>
        <p>Number of charecters : {text.length}</p>
        <p>Reading Time: {0.008 * (text.split(' ').length-1)}</p>
        <h3 className="text-center">Preview Document</h3>
        <div className="content">
        <textarea
          className="form-control"
          id="text"
          rows="3"
          value={text}
          style={props.mode==='dark'?styledark:stylelight}
          onChange={handleOnChangeAlert}
        ></textarea>
        </div>
    </div>
    </div>
  );
}

