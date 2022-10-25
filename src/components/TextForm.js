import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length>0) {
            props.showAlert('Success: Converted to upperCase','success')    
        } else{
            props.showAlert('Warning: Enter some text to make it upperCase','danger')
        }
    }
    const handlelowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length>0) {
            props.showAlert('Success: Converted to lowerCase','success');
        }else{
            props.showAlert('Warning: Enter some text to make it lowerCase','danger')
        }

    }
    const handleTitClick = ()=>{
        let newText = text.split(' ').map( c =>  c.charAt(0).toUpperCase() + c.substring(1)).join(' ') ;
        setText(newText);
        if (text.length>0) {
            props.showAlert('Success: Converted to titleCase','success')

        }else{
            props.showAlert('Warning: Enter some text to make it titleCase','danger')
        }

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleExtraSpaceClick = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(' '));
        props.showAlert('Success: ExtraSpaces has been removed','success')

    }

    return (
        <>
        <div className='container my-3'>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'?'black':'white',color:props.mode === 'light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className='my-4'>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleTitClick}>Convert to TitleCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').length} Words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textbox Above to preview it here'}</p>
        </div>
      
        </>
    )
}
