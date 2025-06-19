import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from '../Signin/Signin';
import Signup from '../Singup/Signup';
import NotFound from '../NotFound/NotFound';

function UnAuthRouter() {
    return (
            <Routes>
                <Route path='/singnin' element={<Signin />}/>
                <Route path='/singnup' element={<Signup />}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
    );
}

export default UnAuthRouter;