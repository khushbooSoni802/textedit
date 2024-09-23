
import React, {useState} from 'react'

export default function TextForm2() {
  const myStyle = {
    color: 'white',
    backgroundColor : 'black'
    }

    const [text, setText] = useState(" ");

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
   
  return (
    <div className= "container" style={myStyle}>
        <h1> Title </h1>

<div className="mb-3" >
<textarea className="form-control" value = {text}  onChange={handleOnChange} id="myBox" rows="1"></textarea>
</div>

    </div>
  )
}
