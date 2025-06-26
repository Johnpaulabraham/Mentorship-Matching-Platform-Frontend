const Dashboard = () => {
	return (
		<>
			<header>
				<div className='brand'>
					<a href=''>
						<img src='/public/img/favicon.png' alt='' />
					</a>
					<h2>Mentorship Dashboard</h2>
				</div>
				<nav className='navbar'>
					<ul>
						<li>
							<a href=''>Dashboard</a>
						</li>
						<li>
							<a href=''>Mentors</a>
						</li>
						<li>
							<a href=''>My Requests</a>
						</li>
						<li>
							<a href=''>My Sessions</a>
						</li>
					</ul>
				</nav>
			</header>
			<section>
				<div className='dashboard'>
					{/* See Mentors Section */}
					<div className='mentorDiv'>
						<h3>Mentor Directory</h3>
						{/* Filter Mentor by Skill and Industry */}
						<div className='MentorFilter'>
							<div className='bySkill'>
								<label for='skills'>By Skill</label>
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
							<div className='byIndustry'>
								<label for='skills'>By Industry</label>
								<br />
								<select name='industry' id='industry'>
									<option value='Select Industry'>Select Industry</option>
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
						</div>
						{/* Request Mentor Section */}
						<div className='mentorList'>
							{/* Mentors */}
							<div className='mentor mentor1'>
								<img src='/public/img/favicon.png' alt='Mentor Image' />
								<div className='mentorBio'>
									<h4>Emmanuel Victor</h4>
									<p>Software Engineer, Passionate about Open source</p>
									<p>Skills: TypeScript, React, Node.js</p>
								</div>
								<button>Request Mentorship</button>
							</div>

							<div className='mentor mentor2'>
								<img src='/public/img/favicon.png' alt='Mentor Image' />
								<div className='mentorBio'>
									<h4>John Smith</h4>
									<p>
										UI/UX Designer, with focus on improving user experiences
									</p>
									<p>Skills: UI/UX, Graphics Design</p>
								</div>
								<button>Request Mentorship</button>
							</div>

							<div className='mentor mentor3'>
								<img src='/public/img/favicon.png' alt='Mentor Image' />
								<div className='mentorBio'>
									<h4>John Smith</h4>
									<p>
										Digital Marketer, making brands visible to world at large
									</p>
									<p>Skills: Marketer, Social Media Manager</p>
								</div>
								<button>Request Mentorship</button>
							</div>
						</div>
					</div>

					{/* Session Section */}
					<div className='sessionDiv'>
						<div className='scheduleSession'>
							<h3>Schedule a Session</h3>
							<input type='date' name='date' id='date' />
							<br />
							<input type='time' name='time' id='time' />
						</div>

						<div className='feedbackSection'>
							<h3>Session Feedback</h3>
							<p>Rate any session</p>
							<div className='rate'>
								<img src='' alt='Rate Star' />
								<img src='' alt='Rate Star' />
								<img src='' alt='Rate Star' />
								<img src='' alt='Rate Star' />
							</div>
							<div className='comment'>
								<label htmlFor='comment'>Comments</label>
								<br />
								<textarea name='comment' id='comment'></textarea>
							</div>
							<button type='submit'>Submit</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Dashboard;
