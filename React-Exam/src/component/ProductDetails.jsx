import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Nav from './Nav';
function ProductDetails() {
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState('');
	const { id } = useParams();
	const userId = localStorage.getItem('userId');
	const navigate = useNavigate();
	useEffect(() => {
		axios.get(`https://fakestoreapi.com/products/${id}`).then(function (response) {
			// handle success
			console.log(response.data);
			setProduct(response.data);
		});
	}, []);

	const handleAddToCART = () => {
		axios
			.post('https://fakestoreapi.com/carts', {
				userId: userId,
				product: [{ productId: id, quantity: quantity }],
			})
			.then(function (response) {
				console.log(response);
				// navigate('/ShoppingCart');
			})
			.catch(function (error) {
				console.log(error);
			});
		// fetch('https://fakestoreapi.com/carts', {
		// 	method: 'POST',
		// 	body: JSON.stringify({
		// 		userId: 5,
		// 		products: [
		// 			{ productId: 5, quantity: 1 },
		// 			{ productId: 1, quantity: 5 },
		// 		],
		// 	}),
		// })
		// 	.then((res) => res.json())
		// 	.then((json) => console.log(json));
	};
	return (
		<div>
			<Nav />
			<Link to={'/Home'}>
				<button className='bg-gray-200 p-2 m-4'>Back To Product</button>
			</Link>

			<div className='flex'>
				<div className='flex'>
					<div className='w-[30vw]'>
						<img src={product.image} alt='' className='w-[30vw]' />
					</div>
					<div className='w-[40vw] border'>
						<p className='pl-14 text-2xl  mt-4 text-justify w-[35vw]'>{product.description}</p>
						<hr className='border-2 mt-5' />
						<button className='bg-red-500 rounded-md p-1 mt-2 ml-14 text-white w-[3vw]'>Deal</button>
						<p className='pl-14 text-2xl'>${product.price}</p>
						<p className='pl-14 text-sm text-gray-400'>Typical price: $98.99 </p>
					</div>
				</div>
				<div className='w-[20vw]  border'>
					<p className='ml-2  mt-4 text-2xl'>${product.price}</p>
					<p className='ml-2 text-sm text-gray-400'>
						$41.08 Shipping & Import Charges to Saudi Arabia Details
					</p>
					<p className='ml-2 text-base text-black mt-2'>Delivery January 2 - 7</p>
					<p className='ml-2 text-base text-black mt-2'>Or fastest delivery December 29 - January 4</p>
					<label className='ml-2'>
						Quantity:
						<select
							value={quantity}
							onChange={(e) => {
								setQuantity(e.target.value);
							}}
							name='quantity'
						>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
						</select>
					</label>
					<div className='flex w-[20vw]  items-center flex-col gap-2 mt-4'>
						<Link to={`/ShoppingCart/${product.id}`}>
							<button onClick={handleAddToCART} className='bg-[#F7CA00] p-1.5 rounded-3xl w-[18vw]'>
								Add to Cart
							</button>
						</Link>
						<button className='bg-[#FA8900] p-1.5 rounded-3xl w-[18vw]'>Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;

// const storeToCart = JSON.parse(localStorage.getItem('cartItem') || '[]');
// localStorage.getItem('cartItem', JSON.stringify([...storeToCart, cart]));
