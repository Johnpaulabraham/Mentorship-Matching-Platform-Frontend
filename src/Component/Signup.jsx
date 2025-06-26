const Signup = () => {
	return (
		<>
			<main>
				<section className='form-section'>
					<form className='signup'>
						<h2>Sign Up to Register</h2>
						<div className='input-div email'>
							<label for='Email'>Email</label>
							<br />
							<input type='email' placeholder='Enter your Email here' />
						</div>
						<div className='input-div password'>
							<label for='Password'>Password</label>
							<br />
							<input type='password' placeholder='Enter your Password here' />
						</div>
						<button className='form-btn'>Sign UP</button>
						<p>
							Already Registered?
							<span>
								<a href=''> Create a Profile</a>
							</span>
						</p>
					</form>
				</section>
			</main>
		</>
	);
};

export default Signup;
