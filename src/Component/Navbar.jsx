import React from "react";
import Signup from "./Signup";

function Navbar() {
	return (
		<>
			<header>
				<div className='brand'>
					<a href=''>
						<img src='/public/img/favicon.png' alt='' />
					</a>
					<h2>Mentorship</h2>
				</div>
				<nav className='navbar'>
					<ul>
						<li>
							<a href=''>About Us</a>
						</li>
						<li>
							<a href=''>How it Works</a>
						</li>
						<li>
							<a href=''>
								<button type='button'>Sign Up</button>
							</a>
						</li>
						<li>
							<a href=''>
								<button type='button'>Login</button>
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
