import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cartpage from './Cartpage';
import Data from './local';
import Ordersummary from './Ordersummary';
import { Otp } from './otp';
import { Payment } from './Payment';
import { Paymentsuccess } from './Paymentsuccess';
import Products from './ProductPage/Products';
import { Success } from './Success';
import ProductDetails from './ProductPage/ProductDetails';
import Login from '../login_signup/Login';
import Signup from '../login_signup/Signup';
import Account from '../my_account/Account';
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import HomePage from "../Components/HomePage/HomePage"
function Allroutes(props) {
    return (
        
        <Routes>
            <Route path='/' element={<HomePage url={"fruits"}/>} />
            <Route path='/user/login' element={<Login />} />
            <Route path='/user/signup' element={<Signup />} />
            <Route path='/user/account' element={<PrivateRoute><Account /></PrivateRoute> } />
            <Route path='/cartpage' element={<PrivateRoute><Cartpage /></PrivateRoute>} />
            <Route path='/local' element={<Data />} />
            <Route path='/fruits' element={<Products url={`fruits`} />} />
            <Route path='/dairy' element={<Products url={`dairy`} />} />
            <Route path='/staples' element={<Products url={`staples`} />} />
            <Route path='/apples_pears' element={<Products url={`apples_pears`} />} />
            <Route path='/HomeAppliance' element={<Products url={`HomeAppliance`} />} />
            <Route path='/men' element={<Products url={`men`} />} />
            <Route path='/mobiles' element={<Products url={`mobiles`} />} />
            <Route path='/makeup' element={<Products url={`makeup`} />} />
            <Route path='/autocare' element={<Products url={`autocare`} />} />
            <Route path='/toysgames' element={<Products url={`toysgames`} />} />
            <Route path='/ordersummary' element={<PrivateRoute><Ordersummary /></PrivateRoute>} />
            <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
            <Route path='/paymentsuccess' element={<PrivateRoute><Paymentsuccess /></PrivateRoute>} />
            <Route path='/success' element={<PrivateRoute><Success /></PrivateRoute>} />
            <Route path='/otp' element={<PrivateRoute><Otp /></PrivateRoute>} />

            <Route path="/:path/productdetails/:_id" element={<ProductDetails />} />
        </Routes>
    );
}

export default Allroutes;

