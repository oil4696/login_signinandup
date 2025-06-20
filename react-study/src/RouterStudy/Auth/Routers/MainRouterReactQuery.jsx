import React, { useEffect, useState } from 'react';
import RootLayout from '../RootLayout/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import UnAuthRouter from './UnAuthRouter';
import AuthRouter from './AuthRouter';
import NotFound from '../NotFound/NotFound';
import RootHeader from '../RootHeader/RootHeader';
import axios from 'axios';
import { useGlobalStateStore, useRefreshStore } from '../stores/storeStudy';
import { useQuery } from '@tanstack/react-query';

/**
 * 전역 상태 관리
 * 1. 클라이너트 전역 상태(Zustand, recoil -> react19에서 지원X)
 * 2. 서번 전역 상태(React)
 */

function MainRouterReactQuery(props) {

    const principalUserQuery = useQuery({
        queryKey: ["principalUserQuery"],
        queryFn: async () => {
            const accessToken = localStorage.getItem("AccessToken");
            return await axios.get("http://localhost:8080/api/users/principal", {
                headers:{
                    Authorization: !accessToken ? null : `Bearer ${accessToken}`,
                }
            });
        },
        // refetchOnWindowFocus: true,      // 화면에 포커스가 갈때마다 
        // retry: 3,                        // 지정된 수만큼 요청실패시 재요청
        staleTime: 1000 * 60,               // 지정된 시간이 지나면 재로딩
        // gcTime: 60000 * 10,              // 지정된 시간이 지나면 캐쉬를 초기화   
    });  //-> 훅함수임

    console.log(principalUserQuery.isLoading)
    console.log(principalUserQuery.data);

    return (
        <>
            {
                !principalUserQuery.isLoading &&
                <RootLayout>
                    <RootHeader/>
                    <Routes>
                        <Route path='' element={<Home />} />
                        <Route path='/auth/*' element={<AuthRouter />} />
                        <Route path='/users/*' element={<UnAuthRouter />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </RootLayout>
            }
        </>
    );
}

export default MainRouterReactQuery;