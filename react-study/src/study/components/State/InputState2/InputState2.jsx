import { useState } from "react";

function InputState2() {
    const [ inputValue, setInputValue ] = useState({
        t1: "",
        t2: "",
        t3: "",

    });

    const handleOnChange = (e) => {
        const name = e.targer.name;
        const value = e.targer.value;
        console.log(`nameL: ${name}, value: ${value}`);

        const newInputValue = {
            ...inputValue,
            [name]: value,
        }

        setInputValue(newInputValue);
        
        const addr = "address";
        const address = "부산 동래구";

        const obj = {
            name: "김준일",
            age: 32,
            [addr]: address,
            address: "부산 부산진구"
            // ["address"]: "부산 동래구", 위와 동일
        }
        // const obj2 = {
        //     name: obj.name,
        //     age: obj.age,
        //     address: obj.address,
        // }; 아래와 동일

        const obj2 = {
            ...obj,
            address: "부산 북구",
        };

    }


    return <div>
        <input type="text" name="t1" value={inputValue.t1} onChange={handleOnChange}/>
        <input type="text" name="t2" value={inputValue.t2} onChange={handleOnChange}/>
        <input type="text" name="t3" value={inputValue.t3} onChange={handleOnChange}/>

        <input type="text" value={inputValue.t1} onChange={(e) => {console.log(e)}}/>
        <input type="text" value={inputValue.t2} onChange={(e) => {console.log(e)}}/>
        <input type="text" value={inputValue.t3} onChange={(e) => {console.log(e)}}/>

    </div>
}

export default InputState2;