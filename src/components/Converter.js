import React, { useState } from 'react';
import '../styles/Converter.css'

function Conversor() {
    const [text, setText] = useState('')

    return (
        <div>
            <h1>To Upper Case</h1>
            <div className="sectionOne">
                <input type="text" id="textInput" placeholder="Insert the text here"/>
                <button type="button" onClick={() => {
                    const textInserted = document.getElementById('textInput').value
                    const textConverted = textInserted.toUpperCase()
                    if (textConverted === '') {
                        alert("Por favor, preencha o campo de texto.")
                    } else {
                        setText(textConverted)
                    }
                    
                }} >TO UP</button>
            </div>
            <div className="result">
                <label>{text === '' ? 'RESULT OF CONVERSION' : text}</label>
            </div>
        </div>
    );
}

export default Conversor;