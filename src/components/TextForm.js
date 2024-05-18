import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("onchange was clicked");
        setText(event.target.value);
    }
  return (
    <>
    <h2 style ={{color:props.mode==='light'?'#021057':'white'}}>{props.heading}</h2>
<div className="container mb-3" style ={{color:props.mode==='light'?'#021057':'white'}}>
<label htmlFor="mybox" className="form-label">{props.textTitle}</label>
<textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="9" style ={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'dark'}}></textarea>
  <button className={`btn btn-${props.mode==='light'?'light':(props.mode==='#021057'?'primary':(props.mode==='#a90000'?'danger':'success'))} my-3 mx-2`} onClick={handleUpClick}>Convert To UpperCase</button>
  <button className={`btn btn-${props.mode==='light'?'light':(props.mode==='#021057'?'primary':(props.mode==='#a90000'?'danger':'success'))} my-3 mx-2`} onClick={handleLowClick}>Convert To LowerCase</button>
</div>
<div className="container my-2" style ={{color:props.mode==='light'?'#021057':'white'}}>
    <h2>Your Text Summary</h2>
    <p>{text.length===0||text.charAt(text.length-1)===' '?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters and it will take {text.length===0||text.charAt(text.length-1)===' '?(text.split(" ").length-1)*0.008:text.split(" ").length*0.008} minutes to read it.</p>
    <h2>Prieview</h2>
    <p>{text.length>0?text:`Enter Your Text To Prieview`}</p>
</div>

</>
  )
}

TextForm.defaultProps = {
    textTitle : "Example Text Area",
    heading : "Your Text here",
}
