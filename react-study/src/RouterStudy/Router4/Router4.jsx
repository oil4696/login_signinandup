import React, { useEffect } from 'react';
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';
/** Pathparam */
function Component1() {
    const { name } = useParams();
    console.log(name);
    return <></>
 }
/** Search Param */
function Component2() {
    const [searchParams, setSearchPaeams] = useSearchParams();
    console.log(searchParams.get("name"));
    console.log(searchParams.get("age"));
    
    useEffect(() => {
        const entries = searchParams.entries();
        let searchParamObj = {};
        while (true) {
            if (!entries.next().done) {
                break;
            }
            const [ key, value ] = next.value;

            searchParamObj ={
                ...searchParamObj,
                [ket]: value,
            }
        }
        console.log(searchParamObj);
        console.log(searchParams.getAll("address"));
    }, [searchParams]);

    const handleOnClick = () => {
        setSearchPaeams(prev => {
            prev,set("address", "busan");
            return prev;
    });
}

    
    return<>
        <div>
            <button onClick={handleOnClick}>주소 추가</button>
        </div>
    </>
 }

function Router4(props) {



    return (
        <div>
            <Routes>
                <Route path='/param1/:name/:age' element={<Component1 />} />
                <Route path='/param2' element={<Component2 />} />
            </Routes>
        </div>
    );
}

export default Router4;