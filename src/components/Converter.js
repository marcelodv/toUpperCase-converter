import React, { useState } from 'react';

function Conversor() {
    const [text, setText] = useState('')

    return (
        <div>
            <h1>To Upper Case</h1>
            <input type="text" id="textInput" placeholder="Insert the text"/>
            <button onClick={() => {
                var t1 = document.getElementById('textInput').value.toUpperCase()
                setText(t1)
            }}>
                To Up
            </button>
            <br/><br></br>
            <label>{text}</label>
        </div>
    );
}

export default Conversor;