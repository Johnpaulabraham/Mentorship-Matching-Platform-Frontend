const Profile = () => {
	return (
		<>
			<main>
				<section className='form-section'>
					<form className='profile'>
						<h2>Create Your Profile</h2>
						<div className='input-div fname'>
							<label for='full-name'>Full Name</label>
							<br />
							<input
								type='text'
								placeholder='Enter your Full Name here'
								className='full-name'
							/>
						</div>
						<div className='input-div bio'>
							<label for='bio'>Bio</label>
							<br />
							<textarea
								name='bio'
								id='bio'
								placeholder='Enter your Bio Data Here'
							></textarea>
						</div>
						<div className='input-div role'>
							<label for='role'>Role</label>
							<br />
							<select name='role' id='role'>
								<option value='Select Role'>Select your Role</option>
								<option value='Admin'>Admin</option>
								<option value='Mentor'>Mentor</option>
								<option value='Mentee'>Mentee</option>
							</select>
						</div>
						<div className='input-div skills'>
							<label for='skills'>Skills</label>
							<br />
							<select name='skills' id='skills'>
								<option value='Select Skills'>Select yours Skills</option>
								<option value='Software Developer'>Software Developer</option>
								<option value='UI/UX Designer'>UI/UX Designer</option>
								<option value='Project Manager'>Project Manager</option>
								<option value='Cyber Security'>Cyber Security</option>
								<option value='Software Tester'>Software Tester</option>
								<option value='Public Speaking'>Public Speakin</option>
								<option value='Video Editor'>Video Editor</option>
								<option value='Sound Editor'>Sound Editor</option>
								<option value='Virtual Assistant'>Virtual Assistant</option>
								<option value='Data Anaylist'>Data Anaylist</option>
								<option value='Others'>Others</option>
							</select>
						</div>
						<div className='input-div goals'>
							<label for='goals'>Goals</label>
							<br />
							<textarea
								name='goals'
								id='goals'
								placeholder='What are your Goals'
							></textarea>
						</div>
						<a href=''>
							<button className='form-btn'>Create Profile</button>
						</a>
					</form>
				</section>
			</main>
		</>
	);
};

export default Profile;
