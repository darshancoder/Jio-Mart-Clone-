import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cartpage from './Cartpage';
import Data from './local';

function Allroutes(props) {
    return (
        <Routes>
            <Route path='/cartpage' element={<Cartpage/>}/>
            <Route path='/local' element={<Data/>}/>
        </Routes>
    );
}

export default Allroutes;