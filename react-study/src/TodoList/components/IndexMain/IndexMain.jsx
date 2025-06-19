/** @jsxImportSource @emotion/react */
import { IoTrash } from 'react-icons/io5';
import * as s from './styles';
import React, { useState } from 'react';
import { MdAutoFixHigh } from 'react-icons/md';


function IndexMain({todoList, setTodoList}) {

    const [ inputValue, setIputValue ] = useState("");
    const [ contentOpenId, setContentOpenId ] = useState(0);

    const handleOnChange = (e) => {
        setIputValue(e.target.value);
    }

    const handleOnKeyDown = (e) => {
        if (e.keyCode !== 13) {
            return;
        } else {
            setIputValue("")
        }
        // 공백 제거용 함수
        if (inputValue.trim().length === 0 ) {
            return
        }
        console.log("todo 등록");
        setTodoList((prev) => {
            const lastId = prev.length === 0 ? 0 : prev[prev.length - 1].id;
            const newTodo = {
                id: lastId + 1,
                isComplete: false,
                content: inputValue,
            }

            return [ ...prev, newTodo ];
        });

        setInterval("")
    }

    const handleCheckBoxOnchange = (e) => {
        const todoId = parseInt(e.target.value)
        setTodoList(prev => prev.map(todo => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    isComplete: !todo.isComplete,
                }
            }
            return todo;
        }))
    }

    const handleContentOpenOnClick = (todoId) => {
        setContentOpenId(prev => prev !== todoId ? todoId : 0);
    }

    const handelDeleteOnClick = (todoId) => {
        setTodoList(prev => prev.filter(todo => todo.id !== todoId))
    }


    return (
        <div css={s.container}>
            <div css={s.listContainer}>
                <ul >
                    {
                        todoList.map(todo => (
                            <li key={todo.id}>
                                <input type="checkbox" id={`todo${todo.id}`} value={todo.id} checked={todo.isComplete} onChange={handleCheckBoxOnchange} />
                                <label htmlFor={`todo${todo.id}`}></label>
                                <div css={s.todoTextContainer(contentOpenId === todo.id)} onClick={() => handleContentOpenOnClick(todo.id)}>{todo.content}</div>
                                <div css={s.hiddenTrashBox}>
                                    <div className="trash" css={s.trashBox} onClick={() => handelDeleteOnClick(todo.id)} >
                                        <IoTrash />
                                    </div>
                                </div>    
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div css={s.todoInputContainer}>
                <input type="text" value={inputValue} onChange={handleOnChange} onKeyDown={handleOnKeyDown} />
            </div>
        </div>
    );
}

export default IndexMain;