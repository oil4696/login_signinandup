import { css } from "@emotion/react";
import { PiWifiX } from "react-icons/pi";

export const container = css`
display: flex;
flex-direction: column;
flex-grow: 1;

`;

export const listContainer = css`
    /* flex-grow 이 박스가 들어가는 부모 박스가 display: flex여야 나머지 여백을 채울수 있다. */
    flex-grow: 1;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    overflow: hidden;

    & > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 432px;
        overflow-y: scroll;

        & > li {
            position: relative;
            display: flex;
            box-sizing: border-box;
            border-bottom: 1px solid #dbdbdb;
            padding: 5px 10px;

            & > input[type=checkbox] {
                display: none;

                & + label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    border: 1px solid #dbdbdb;
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;

                }

                &:checked + label::after {
                    content: "";
                    display: 50%;
                    border-radius: 50%;
                    width: 15px;
                    height: 15px;
                    background-color: #0b4f8f;
                }
            }
        }
    }
`;

export const hiddenTrashBox = css`
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    overflow: hidden;
    cursor: pointer;
    &:hover > .trash {
        right: 0px;
    }
`;

export const trashBox = css`
    position: absolute;
    top: 0;
    right: -36px;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #ea0808;
    color: #fff;
    cursor: pointer;
`;



export const todoTextContainer = (isOpen) => css`
    margin-left: 10px;
    width: 280px;
    text-align: start;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    ${
       isOpen ?
       `white-space: break-spaces;
       overflow-wrap: break-word;
       word-wrap: break-word;" 
       text-overflow: ellipsis;`
       :
       `white-space: nowrap; 
       text-overflow: e;;ipsis 
       overflow: hidden`
    }
    
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    `;


export const todoInputContainer = css`
    box-sizing: border-box;
    margin: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    overflow-y: hidden;

    & > input {
        box-sizing: border-box;
        border: none;
        padding: 5px 15px;
        outline: none;
        width: 100%;
        height: 100%;
    }
`;