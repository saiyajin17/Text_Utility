import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear=()=>{
    setText('')
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}
            rows="8"
            value={text}
            onChange={handleOnChange}
            
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleLowClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleClear}>
          Clear Screen
        </button>

      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Your Text Summary</h1>
        <p>
        &nbsp; &nbsp;&nbsp;&nbsp; {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charachters
        </p>
        <p>&nbsp;&nbsp;&nbsp; &nbsp;{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
        <h3>Preview </h3>
        <p>{text.length>0?text:''}</p>
      </div>
    </>
  );
}
