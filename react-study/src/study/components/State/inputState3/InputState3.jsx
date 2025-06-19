import { useState } from "react";

function InputState3() {
    
    const setStudenInputValueEmpty = {
    name: "",
    age: "",
    address: "",
}

const [ studentInputValue, setStudenInputValue ] = useState(setStudenInputValueEmpty);

const hadleOnChange = (e) => {
    const { name, value } = e.target;
    // 원래 상태값을 가지고온다. prev 이전의 것
    setStudenInputValue((prev) => {
        return {
        ...prev, 
        [name]: value,
        }
    });
}

    return <div>
        <h1>{studentInputValue.name}</h1>
        <h1>{studentInputValue.age}</h1>
        <h1>{studentInputValue.address}</h1>
        <input type="text" name="name" value={studentInputValue.name} onChange={hadleOnChange} />
        <input type="text" name="age" value={studentInputValue.age} onChange={hadleOnChange} />
        <input type="text" name="address" value={studentInputValue.address} onChange={hadleOnChange} />

        <button onClick={() => setStudenInputValue(setStudenInputValueEmpty)}>리셋</button>
    </div>
}

export default InputState3;