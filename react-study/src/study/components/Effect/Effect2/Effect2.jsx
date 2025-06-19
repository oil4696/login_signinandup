/** @jsxImportSource @emotion/react */ 
// 주석아니라 코드임


import { css } from '@emotion/react';
import React, { useState } from 'react';

// 아래의 css``를 사용하려면 5번라인 필요

const aa = (p1, p2) => css`
    display: flex;
    box-sizing: border-box;
    border: 5px solid ${p2 ? "green" : "#222"};
    width: 200px;
    height: 200px;
    background-color: ${p1 ? "red" : "blue"};
`;

function Effect2(props) {
    const [ flag, setFlag ] = useState(false);

    const handleOnClick = () => {
        setFlag((prev) => !prev)
    }


    return (
        <div>
            {/* 아래의 css를 쓰려면 1번라인이 필요 */}
            <div css={aa(flag, !flag)}></div>
                 <button onClick={handleOnClick}>변경</button>
        </div>
    );
}

export default Effect2;