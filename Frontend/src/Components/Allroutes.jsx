import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cartpage from './Cartpage';
import Data from './local';
import Products from './ProductPage/Products';
import ProductDetails from './ProductPage/ProductDetails';

function Allroutes(props) {
    return (
        <Routes>
            <Route path='/cartpage' element={<Cartpage/>}/>
            <Route path='/local' element={<Data/>}/>
            <Route path='/fruits' element={<Products url={`fruits`}/>} />
            <Route path='/dairy' element={<Products url={`dairy`}/>} />
            <Route path='/staples' element={<Products url={`staples`}/>} />
            <Route path='/apples_pears' element={<Products url={`apples_pears`}/>} />
            <Route path='/HomeAppliance' element={<Products url={`HomeAppliance`}/>} />
            <Route path='/men' element={<Products url={`men`}/>} />
            <Route path='/mobiles' element={<Products url={`mobiles`}/>} />
            <Route path='/makeup' element={<Products url={`makeup`}/>} />
            <Route path='/autocare' element={<Products url={`autocare`}/>} />
            <Route path='/toysgames' element={<Products url={`toysgames`}/>} />
            
            <Route path="/:path/productdetails/:_id" element={<ProductDetails />}/>
        </Routes>
    );
}

export default Allroutes;