import React , {useState} from 'react'

export default function Form(props) {
    const handleUpClick = () =>{
        console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to UpperCase", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className='container' style = {{color: props.mode==='dark' ? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style = {{backgroundColor: props.mode==='dark' ? 'grey': 'white', color:  props.mode==='dark' ? 'white': 'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>

        
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>   
        <button type="button" className="btn btn-primary mx-2" onClick={speak}>Speak</button>
        
    </div>

    <div className="container my-4" style = {{color: props.mode==='dark' ? 'white': 'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  ) 
}
