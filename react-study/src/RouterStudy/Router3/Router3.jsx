import React, { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
/**
 * 경로(path) 관리
 * 이덩기록(history) 관리
 */
function Router3(props) {
    const lacation = useLocation();
    const navigate = useNavigate();
    

    useEffect(() => {
        console.log("경로이동함!!");
        console.log(location.pathname); //현재 경로
        if (lacation.pathname === "/location/2") {
            navigate("/location/3", {
                state: {
                    name: "김준일",
                    age: 32,
                }
            });
        }
    }, [location.pathname]);

    useEffect(( ) => {
            console.log("쿼리(서치)파람 변경");
            console.log *(location.search);
            console.log *(decodeURI(location.search));
    }, [location.search]);

    useEffect(() => {
        console.log(location.state)
    }, [location.state]);

    const handleBackOnClick = () => {
        navigate(-1);
    }

    return (
        <div>
            <Link to={"/location/1"}>location1</Link>
            <Link to={"/location/2"}>location2</Link>
            <Link to={"/location/3"}>location3-1</Link>
            <Link to={"/location/3?name=김준일"}>location3-2</Link>
            <Link to={"/location/3?name=김준이"}>location3-3</Link>
            <button onClick={handleBackOnClick}>뒤로가기</button>
            <Routes>
                <Route path='/location/1' element={<h1>Location1</h1>} />
                <Route path='/location/2' element={<h1>Location1</h1>} />
                <Route path='/location/3' element={<h1>Location1</h1>} />
            </Routes>
        </div>
    );
}

export default Router3;