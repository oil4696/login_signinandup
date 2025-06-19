import React, { useEffect, useState } from 'react';

function Effect1(props) {

const[ name, setName ] = useState("");
const[ age, setAge ] = useState(0);
const [ h1NAme, setH1name ] = useState("")
const [ h1Age, setH1age ] = useState("")

const handleNameOnChage = (e) => {
    setName(e.target.value);
}
const handleAgeOnChage = (e) => {
    setAge(e.target.value);
}
const handleNameOnClick = () => {
    setH1name(name);
}
const handleAgeOnClick = () => {
    setH1age(age);
}

useEffect(() => {
    console.log(h1NAme);
    console.log(h1Age);
},[h1NAme,h1Age])

    return (
        <div>
            <h1>{h1NAme}</h1>
            <h1>{h1Age}</h1>
            <input type="text" value={name} onChange={handleNameOnChage} />
            <button onClick={handleNameOnClick}>이름확인</button>
            <input type="text" value={age} onChange={handleAgeOnChage} />
            <button onClick={handleAgeOnClick}>나이확인</button>
        </div>
    );
}

export default Effect1;