/** @jsxImportSource @emotion/react */
import * as s from './styles';
import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineCheckCircle, MdOutlineErrorOutline } from 'react-icons/md';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRefreshStore } from '../stores/storeStudy';
import { useQueryClient } from '@tanstack/react-query';


/**
 *  유효성검사(Validation Check)
 */

function useSignInAndUpInput({ id, type, name, placeholder, value, valid }) {
    const STATUS = {
        idle: "idle",
        success: "success",
        error: "error",
    };
    const inputRef = useRef();
    const [ inputValue, setInputValue ] = useState(value);
    const [ status, setStatus ] = useState(STATUS.idle);

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOnBlur = (e) => {
        if(isEmpty(e.target.value)) {
            setStatus(STATUS.idle);
            return;
        }

        if (valid.enabled) {
            setStatus(valid.regex.test(e.target.value) ? STATUS.success : STATUS.error);
            return;
        }

        setStatus(valid.callback() ? STATUS.success : STATUS.error);

    }

    const isEmpty = (str) => {
        return !/^.+$/.test(str);
    }

    return {
        name: name,
        value: inputValue,
        status: status,
        ref: inputRef,
        element: <SignInAndUpInput 
            key={id}
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={inputValue}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            status={status}
            message={valid.message}
            inputRef={inputRef} />
    }
}

function SignInAndUpInput({type, name, placeholder, value, onChange, onBlur, status, message, inputRef}) {
    const {isShow, element: PasswordInputHiddenButton } = usePasswordInputHiddenButton(); 


    return (
        <div css={s.inputItem}>
            <div css={s.inputContainer(status)}>
                <input type={type === "password" ? isShow ? "text" : "password" : type} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} ref={inputRef} />
                {
                    type === "password" && PasswordInputHiddenButton
                }
                {
                    status !== "idle"
                    && (
                        status === "success" 
                        ? <div><MdOutlineCheckCircle /></div>
                        : <div><MdOutlineErrorOutline /></div>
                    )
                }
            </div>
            <InputValidatedMessage status={status} message={message} />
        </div>
    )
}

function usePasswordInputHiddenButton() {

    const [isShow, setShow] = useState(false);
    
    const handleOnClick = () => {
        setShow(prev => !prev);
    }

    return {
        isShow,
        element: <PasswordInputHiddenButton isShow={isShow} onClick={handleOnClick} />
    }
}


function PasswordInputHiddenButton({isShow, onClick}) {

    return <p onClick={onClick}>{isShow ? <IoEye /> : <IoEyeOff />}</p>
}

function useInputValidatedMessage({defaultMessage}) {
    const error = "error"
    
    const [ status, setStatus ] = useState(STATUS.idle);
    const [ message, setMessage ] = useState(defaultMessage || "");

    return {
        status,
        setStatus,
        message,
        setMessage,
        element: <InputValidatedMessage status={status} message={message} />
    }
}

function InputValidatedMessage({status, message}) {
    const ERROR = "error";

    if (status === ERROR) {
        return <div css={s.messageContainer()}>{message}</div>
    }

    return <></>
}

function Signin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();
    const { setValue: setRefresh } = useRefreshStore();
    const [ submitDisabled, setSubmitDisabled ] = useState(true);
    const inputs = [
        {
            id: 1,
            type: "text",
            name: "username",
            placeholder: "사용자이름",
            // ? -> state의 값이 있냐업냐를 물어봄
            value: location.state?.username || "",
            valid: {
                enabled: true,
                regex: /^(?=.*[a-z])(?=.*\d).{4,20}$/,
                message: "아이디는 영문, 숫자를 포함 4~20자여야 합니다.",
            },
        },
        {
            id: 2,
            type: "password",
            name: "password",
            placeholder: "비밀번호",
            value: location.state?.password || "",
            valid: {
                enabled: true,
                regex: /^(?=.*[a-z])(?=.*\d).{4,20}$/,
                message: "아이디는 영문, 숫자를 포함 4~20자여야 합니다.",
            },
        },
    ];

    
    const inputItems = inputs.map(input => useSignInAndUpInput(input));
    //  [input, input] -> [{useSigninAndUpInput}(리턴값), useSignInAndUpInput(리턴값)] useSignInAndUpInput(input)값이 state 상태이기떄문에 202l
    
    useEffect(() => {
        inputItems.forEach(inputItem => {
            inputItem.ref.current.focus();  //커서의 초점을 줌
            inputItem.ref.current.blur();   //커서의 초점을 빠져나감
        });
    }, [])

    useEffect (() => {
        setSubmitDisabled(!!inputItems.find(inputItems => inputItems.status !== "success"))
    }, [inputItems]) // 여기서 상태의 변화가 생긴다.

   

    const handleRegisterOnClick =  async () => {
        const url = "http://localhost:8080/api/users/login"

        // 컨트롤러 메소드 명 login
        // Dto 명 LoginDto
        //POST요청

        let  data = {}; //java의 dto와 같은 형식으로 와야한다 -> api설계
        inputItems.forEach(inputItem => {
            data = {
                ...data,
                [inputItem.name]: inputItem.value,
            }
        });
        
        try{

            const response = await axios.post(url, data, {});  //json으로 자동으로 바꿔서 post요청을 보냄
            const accessToken = response.data?.accessToken;
            if (!!accessToken) {
                localStorage.setItem("AccessToken", accessToken);
                queryClient.invalidateQueries({
                    queryKey: ["principalUserQuery"],
                });
                navigate("/");
            }
            alert("로그인 요청 완료")
        } catch(error) {
            const { response, status } = error;
            console.log(response.data)
            alert("로그인 오류")
        }
    }



    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h1 css={s.title}>로그인</h1>
                {
                    inputItems.map(inputItem => inputItem.element)
                }
            </div>
            <button css={s.submitButton} disabled={submitDisabled} onClick={handleRegisterOnClick}>로그인하기</button>
        </div>
    );
}

export default Signin;
