import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
	return (
		<div>
			<div className='flex gap-52 items-center bg-[#00453E] h-[10vh]'>
				<Link to={'/Home'}>
					<img
						className='w-[8vw]'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
						alt=''
					/>
				</Link>

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
					<input type='text' placeholder='Search Amazon' className='placeholder:p-1 h-[7vh] w-[30vw]' />
					<button className='bg-[#FFDFD7]'>
						<span className='flex items-center justify-center material-symbols-outlined p-1  h-[7vh] w-[4vw]'>
							search
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Nav;
