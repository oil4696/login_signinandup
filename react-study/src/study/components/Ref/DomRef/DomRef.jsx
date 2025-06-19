// rsf, rsc 함수자동 생성

import React, { useEffect, useRef, useState } from 'react';
import * as f from '../ImportStudy/Functions';

function DomRef(props) {
    const [ name, setName ] =useState();
    const inputRef = useRef();

    // 마운트, 언마운트 관리
    // useEffect는컴퍼넌트의 리턴이 일어난 후의 일어날 동작을 정의하는 useEffect의 return은 컴퍼넌트의 return이 끝난후에 정의된다.(화면에서 사라질 때)
    // 언마운트를 안주고 싶으면 return생략가능
    // 마운트의 의존성으로 배열(의존성defendent)이 올수 있다.
    // 배열(의존성defendent)이 정의만되고 값이 없다면 한번만 실행됨
    // 배열(의존성defendent)에 값이 있다면 그 값이 호출될때만 실행
    useEffect(() => {
        console.log("마운트(장착)");
        console.log(inputRef.current.value)
        return () => {
            console.log("언마운트(해제)");
        }
    })
    
    console.log("렌더링2");  // current는 e.targetdocument.qurerySelecto와 동일하다

    return (
        <div>
            <input type="text" ref={inputRef} value={"abc"} />
        </div>
    );
}

export default DomRef;
