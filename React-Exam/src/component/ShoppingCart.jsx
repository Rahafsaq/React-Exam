import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';
function ShoppingCart() {
	const [info, setInfo] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		axios.get(`https://fakestoreapi.com/carts/${id}`).then(function (response) {
			// handle success
			console.log(response.data);
			setInfo(response.data.products);
		});
	}, []);

	return (
		<div className='bg-gray-300 h-[100vh]'>
			<Nav />
			<div className='flex gap-5 w-[100vw] justify-center mt-10'>
				<div className='w-[60vw] bg-white'>
					<div className='flex items-center justify-between p-3'>
						<p className='text-3xl font-medium'>Shopping Cart</p>
						<p>Price</p>
					</div>
					<hr className='border-2' />
					{info.id}
					<div>
						<div className='flex items-center'>
							<img
								className='w-[10vw] p-3'
								src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
								alt=''
							/>
							<div>
								<p className='text-justify'>
									Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light
									weight & soft fabric for breathable and comfortable wearing. And Solid stitched
									shirts with round neck made for durability and a great fit for casual fashion wear
									and diehard baseball fans. The Henley style round neckline includes a three-button
									placket.
								</p>
							</div>
							<p className='p-4'>$74.99</p>
						</div>
					</div>
				</div>

				{/* {info.map((item) => (
					<div className='w-[25vw] bg-gray-100'>
						<p>{item.quantity}</p>
						<p>{item.productId}</p>
					</div>
				))} */}

				<div className='flex flex-col items-center bg-white w-[25vw]'>
					<p className='text-2xl mb-8 mt-4'>Subtotal (items): $615.95</p>
					<Link to={`/Checkout`}>
						<button onClick={''} className='bg-[#F7CA00] p-1.5 rounded-3xl w-[18vw]'>
							Proceed to checkout
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;
