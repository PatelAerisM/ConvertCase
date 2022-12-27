import React, { useState } from 'react'

// console.log(useState('Enter text here2'))

export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
    }
    // const speak = () => {
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = text;
    //     window.speechSynthesis.speak(msg);
    //   }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
   }

   

function totitleCase(value) {
        let myValue = value.toLowerCase()
        let newValue = myValue.split(" ")
        let newarray = []
        for(let i = 0; i< newValue.length; i++){
            let arrayValue = newValue[i][0].toUpperCase() + newValue[i].slice(1)
            newarray.push(arrayValue)
    }
        return newarray.join(" ")
    }

    const buttonClick = () => {
        let newText = totitleCase(text)
        setText(newText)
    }

    const  handleitalic = ()=>{
        console.log("italic"+ text);
        var mtext = document.getElementById('myBox');
       mtext.style.fontStyle= 'italic';
      }
      
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}
            <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalized Case</button>
            <button className="btn btn-primary mx-1" onClick={buttonClick}>TitleCase</button>
            <button className="btn btn-primary mx-1" onClick={handleitalic}>Convert to <i>Italic</i></button>
            {/* <button className="btn btn-primary mx-1" onClick={handleitbold}>Convert to <b>Bold</b></button> */}
            <button type="submit mx-1" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <h5>{text.split(" ").length} words and {text.length} characters</h5>
            <p>{0.008 * text.split(" ").length} Minutes take to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

