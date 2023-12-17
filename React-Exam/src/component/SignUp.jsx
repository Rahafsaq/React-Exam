import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const handleContinue = () => {
		let passwordValidation = /^.{6,}$/;
		if (name === '' || email === '' || password === '') {
			alert('inputs should be fill');
		} else if (!password.match(passwordValidation)) {
			alert('password should be at least 6 characters ');
		} else {
			axios
				.post('https://fakestoreapi.com/users', {
					name: name,
					email: email,
					password: password,
				})
				.then(function (response) {
					console.log(response);
					navigate('/login');
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};
	return (
		<div className='flex flex-col justify-center items-center h-[100vh]'>
			<img
				className='w-[15vw] mt-10'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
				alt=''
			/>
			<div className='flex justify-center items-center h-[100vh]'>
				<div className='flex flex-col  border-2 w-[30vw]'>
					<p className='text-2xl font-semibold ml-7'>Create account</p>
					<div className='ml-7 mt-2'>
						<p className='text-sm font-medium'>Your name</p>
						<input
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							type='text'
							placeholder='First and last name'
							className='border-2 w-[25vw] placeholder:p-1 p-1 '
						/>
					</div>
					<div className='ml-7 mt-2'>
						<p className='text-sm font-medium'>Mobile number or email</p>
						<input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type='email'
							className='border-2 w-[25vw] placeholder:p-1 p-1 '
						/>
					</div>
					<div className='ml-7 mt-2'>
						<p className='text-sm font-medium'>Password</p>
						<input
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							type='password'
							placeholder='At least 6 characters'
							className='border-2 w-[25vw] placeholder:p-1 p-1 '
						/>
					</div>
					<div className='ml-7 mt-2'>
						<p className='text-sm font-medium'>Re-enter password</p>
						<input type='password' className='border-2 w-[25vw] placeholder:p-1 p-1 ' />
					</div>
					<div>
						<button
							onClick={handleContinue}
							className='ml-7 mt-4 mb-4 rounded-md p-1 w-[25vw] bg-[#F7CA00]'
						>
							continue
						</button>
					</div>
					<div className='flex gap-2 ml-8  mb-4'>
						<p>Already have an account? </p>
						<Link to={'/Login'}>
							<p>Sign in</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
