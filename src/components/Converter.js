import React, { useState } from 'react';
import '../styles/Converter.css'

function Conversor() {
    const [text, setText] = useState('')

    return (
        <div>
            <h1>To Upper Case</h1>
            <div className="sectionOne">
                <input type="text" id="textInput" placeholder="Insert the text here"/>
                <button onClick={() => {
                    var t1 = document.getElementById('textInput').value.toUpperCase()
                    if (t1 == '') {
                        alert("Por favor, preencha o campo de texto.")
                    }
                    else {
                        setText(t1)
                    }
                    
                }}>
                    To Up
                </button>
            </div>
            <div className="result">
            <label>{text == '' ? 'RESULT OF OF CONVERSION' : text}</label>
            </div>
        </div>
    );
}

export default Conversor;