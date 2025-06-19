/**
 * 요구사항
+1 버튼을 누르면 count가 1씩 증가

-1 버튼을 누르면 count가 1씩 감소

"빨강", "초록", "파랑" 버튼을 누르면 배경색이 바뀜
 */

import { useState } from "react";

function ColorCounter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("white");

const heandleOnClick = (e) => {
    const num = parseInt(e.target.value);
    setCount(count + num);
}


    return (
        <div style={{ backgroundColor: color, padding: "20px" }}>
            <h1>카운트: {count}</h1>
            <button value="+1"onClick={heandleOnClick}>+1</button>
            <button value="-1"onClick={heandleOnClick}>-1</button>

            <h1>배경색 변경</h1>
            <button  onClick={() => {setColor("red")}}>빨강</button>
            <button  onClick={() => {setColor("green")}}>초록</button>
            <button  onClick={() => {setColor("blue")}}>파랑</button>
        </div>
    );
}

export default ColorCounter;
