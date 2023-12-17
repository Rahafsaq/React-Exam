import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Home() {
	const [product, setProduct] = useState([]);
	const [search, setSearch] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	useEffect(() => {
		axios.get('https://fakestoreapi.com/products').then(function (response) {
			// handle success
			console.log(response.data);
			setProduct(response.data);
		});
	}, []);

	const handleSearch = () => {
		const searchResult = product.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
		setSearchResult(searchResult);
	};
	return (
		<div>
			{/* nav */}
			<div>
				<div className='flex gap-52 items-center bg-[#00453E] h-[10vh]'>
					<img
						className='w-[8vw]'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
						alt=''
					/>
					<div className='flex justify-center'>
						<button className=' h-[7vh] bg-gray-300'>
							All
							<select
								className='bg-gray-300'
								// value={quantity}
								// onChange={(e) => {
								// 	setQuantity(e.target.value);
								// }}
								name='quantity'
							>
								<option value=''></option>
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
						</button>
						<input
							value={search}
							onChange={(e) => {
								setSearch(e.target.value);
							}}
							type='text'
							placeholder='Search Amazon'
							className='placeholder:p-1 h-[7vh] w-[30vw]'
						/>
						<button onClick={handleSearch} className='bg-[#FFDFD7]'>
							<span className='flex items-center justify-center material-symbols-outlined p-1  h-[7vh] w-[4vw]'>
								search
							</span>
						</button>
					</div>
				</div>
			</div>
			{/* nav */}
			<div className='grid items-center w-[100vw] gap-3 mt-10 justify-center grid-cols-3'>
				{(searchResult.length > 0 ? searchResult : product).map((item) => (
					<div key={item.id} className='flex flex-col items-center h-[70vh] border'>
						<img src={item.image} alt='' className='w-[25vw] h-[50vh]' />
						<p>{item.title}</p>
						<p>{item.price}</p>
						<Link to={`/ProductDetails/${item.id}`}>
							<button>View Details</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
