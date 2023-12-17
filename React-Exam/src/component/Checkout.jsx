import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
function Checkout() {
	return (
		<div>
			<Nav />
			<div className='flex flex-col items-center w-[100vw]'>
				<div>
					<div>
						<p className='text-3xl font-medium'>Your Cart</p>
					</div>

					<div>
						<div className='flex items-center'>
							<img
								className='w-[10vw] p-3'
								src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
								alt=''
							/>
							<div></div>
						</div>
					</div>
				</div>

				<input type='text' placeholder='Enter your address' className='border-2' />
				<input type='text' placeholder='Enter your city' className='border-2' />

				<input type='text' placeholder='Enter your country' className='border-2' />
				<Link to={'/Home'}>
					<button className='bg-gray-300'>Place order</button>
				</Link>
			</div>
		</div>
	);
}

export default Checkout;
