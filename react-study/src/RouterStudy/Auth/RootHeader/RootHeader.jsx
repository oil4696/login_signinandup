import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { LuLogOut, LuUser, LuUserPlus } from 'react-icons/lu';
import { Link } from 'react-router-dom';

// 공통적인 부분을 빼놓은 부분

function RootHeader({isLogin, setLogin}) {
    return (
        <header css={s.layout}>
            <h1><Link to ={"/"}>사이트 로고</Link></h1>
            {
            isLogin ? 
            <ul>
                <li><Link to ={"/auth/mypage"}><LuUser /></Link></li>
                <li><Link to ={"/auth/logout"}><LuLogOut /></Link></li>
            </ul>
            :
            <ul>
                <li><Link to ={"/users/singnin"}><LuUser /></Link></li>
                <li><Link to ={"/users/singnup"}><LuUserPlus /></Link></li>
            </ul>
            }
        </header>
    );
}

export default RootHeader;