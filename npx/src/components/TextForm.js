
import React, {useState} from 'react'
import upperIMG from './assets/upperA.png';
import lowerIMG from './assets/lowerA.png';
import deleteIMG from './assets/clearA.png';
import copyImg from './assets/copyImage.png'

export default function TextForm(props) {


    {/*const [myStyle, setMyStyle] = useState ({
        color: 'white',
        backgroundColor : 'black'
        
    })

    const [btntext, setBtnText] = useState("Enable dark Mode");

    const toggleStyle=()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor : 'black',
                border : '1px solid white'
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable dark Mode");
        }
        }
    }*/}

    const [text , setText] = useState("");
    //setText("new text");

    const handleUpClick= () =>{
        //console.log("uppercase was clicked" + text)
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!","success");
    }

    const handleClearClick = () =>{
        let newText = " ";
        setText(newText);
        props.showAlert("text cleared!","success");
    }

    const handleCopyClick = () =>{
         navigator.clipboard.writeText(text);
        props.showAlert("text copied!","success");
    }

    const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    }


    const handleOnChange= (event) =>{
        //console.log("On Change")
        setText(event.target.value);
    }


    return(
<>
    <div className = "container" style={{color: props.mode ==='dark' ? 'white' : 'rgb(1 23 46)'}}>
         <h2 className="mb-4">{props.heading}  </h2>

         <div className="mb-3">
         <textarea className="form-control" value = {text}  onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark' ? '#13466e' : 'white' , color:props.mode ==='dark' ? 'white' : 'rgb(1 23 46)'}}  id="myBox" rows="8"></textarea>
         </div>

         
         <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}  ><img src={upperIMG} alt="" width="20" height="20" margin="30" />{" "}Convert to Uppercase</button>
         
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick} ><img src={lowerIMG} alt="" width="20" height="20" margin="30" />{" "}Convert to Lowercase</button>

         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} ><img src={deleteIMG} alt="" width="20" height="20" margin="30" />{" "}Clear Text</button>

         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick} ><img src={copyImg} alt="" width="20" height="20" margin="30" />{" "}Copy Text</button>

         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} >{" "}Remove Extra Spaces</button>

         {/*</div>button className="btn btn-primary mx-2" onClick={toggleStyle}>{" "}{btntext}</button>*/}



    </div>

    <div className="container my-3" style={{color: props.mode ==='dark' ? 'white' : 'rgb(1 23 46)'}}>
         <h2>Your Text Summary</h2>
         <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
         <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
         <h2>Preview</h2>
         <p>{text.length > 0 ? text:"Nothing to preview "}</p>
    </div>

</>
  )
}
