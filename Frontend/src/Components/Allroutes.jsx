import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cartpage from './Cartpage';
import Data from './local';
import Products from './ProductPage/Products';

function Allroutes(props) {
    return (
        <Routes>
            <Route path='/cartpage' element={<Cartpage/>}/>
            <Route path='/local' element={<Data/>}/>
            <Route path='/fruits' element={<Products/>}/>
        </Routes>
    );
}

export default Allroutes;