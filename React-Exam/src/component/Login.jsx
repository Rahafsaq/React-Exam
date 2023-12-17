import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState([]);
	const [info, setInfo] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios.get('https://fakestoreapi.com/users').then(function (response) {
			// handle success
			console.log(response.data);
			setInfo(response.data);
		});
	}, []);

	const handleSignIn = () => {
		const user = info.find((item) => item.email === email);
		if (user) {
			navigate('/Home');
			localStorage.setItem('userId', user.id);
		} else if (email === '') {
			alert('input should be fill');
		} else {
			alert('wrong email or password');
		}
	};
	return (
		<div className='flex flex-col justify-center items-center h-[100vh]'>
			<img
				className='w-[15vw] mt-10'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
				alt=''
			/>
			<div className='flex justify-center items-center h-[60vh]'>
				<div className='flex flex-col  border-2 w-[30vw]'>
					<p className='text-2xl font-semibold ml-7'>Create account</p>
					<div className='ml-7 mt-2'>
						<p className='text-sm font-medium'>Mobile number or email</p>
						<input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type='text'
							className='border-2 w-[25vw] placeholder:p-1 p-1 '
						/>
					</div>
					<div>
						<button onClick={handleSignIn} className='ml-7 mt-4 mb-4 rounded-md p-1 w-[25vw] bg-[#F7CA00]'>
							continue
						</button>
					</div>
					<div className='mb-2 gap-2 ml-8  '>
						<p className='text-center text-sm text-gray-400'>New to Amazon?</p>
					</div>
					<Link to={'/'}>
						<button className='ml-7 mb-4 rounded-md p-1 w-[25vw] bg-gray-200'>
							create your amazon account
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
