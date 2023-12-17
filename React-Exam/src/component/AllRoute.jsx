import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import SignUp from './SignUp';
import Err from './pages/Err';
function AllRoute() {
	return (
		<div>
			<Routes>
				<Route path='/*' element={<Err />} />
				<Route path='/Home' element={<Home />} />
				<Route path='/Nav' element={<Nav />} />
				<Route path='/' element={<SignUp />} />
				<Route path='/Login' element={<Login />} />
				<Route path='/ProductDetails/:id' element={<ProductDetails />} />
				<Route path='/ShoppingCart/:id' element={<ShoppingCart />} />
				<Route path='/Checkout' element={<Checkout />} />
			</Routes>
		</div>
	);
}

export default AllRoute;
