import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const changeup = () => {
        setText(text.toUpperCase());
    }
    const copytxt=()=>{
        var text=document.getElementById("mytxt")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const changelo = () => {
        setText(text.toLowerCase());
    }
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    const cleartext = () => {
        setText("");
    }
    const resettext = () => {
        setText("Enter text here");
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container' style={{color: props.modeup==='dark'?'white':'#042743'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3" style={{backgroundColor: props.modeup==='dark'?'grey':'white'}}>
                    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.modeup==='dark'?'grey':'white' , color:props.modeup==='dark'?'white':'#042743'}} id="mytxt" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={changeup}>Covert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={changelo}>Convert to LowerCase</button>
                <button type='button' className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={resettext}>Reset Text</button>
                <button type='button' className='btn btn-primary mx-2' onClick={copytxt}>Copy Text</button>
                <div className="container my-3" style={{color: props.modeup==='dark'?'white':'black'}}>
                    <h1>{props.summary}</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>It takes {0.008 * text.split(" ").length} minutes to read this Text.</p>
                </div>
                <div className="container" style={{color: props.modeup==='dark'?'white':'#042743'}}>
                    <h2>Preview Text:</h2>
                    <p>{text.length>0?text:"Enter Someting to Preview here"}</p>
                </div>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'HEADING IS REQUIRED',
    summary: 'Enter Your Summary'
}
