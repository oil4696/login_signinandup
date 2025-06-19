import { useState } from "react";

function InputState() {
    const [ inputValue, setInputValue ] = useState("");
    const [ h1Value, setH1Value ] = useState("");

    const [ inputValue2, setInputValue2 ] = useState("");
    const [ h1Value2, setH1Value2 ] = useState("");

    console.log("렌더링")

    const handleOnChange = (e) => {
        console.log(e)
        setInputValue(e.target.value);
        
    }
    const handleOnChange2 = (e) => {
        setInputValue2(e.target.value);
        
    }
    const handleOnClick = (e) => {
        setH1Value(inputValue);
        setH1Value2(inputValue2);
        
    }
    
    return<div>
        <h1>{h1Value}</h1>
        <h1>{h1Value2}</h1>
        <input type="text" value={inputValue} onChange={handleOnChange}/>
        <input type="text" value={inputValue2} onChange={handleOnChange2}/>
        <button onClick={handleOnClick}>확인</button>
    </div>
}

export default InputState;