import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
// import Signup from "./Signup";
// import Profile from "./Profile";

function Homepage() {
	return (
		<>
			<Navbar />
			<main>
				<Login />
				{/* <Signup /> */}
				{/* <Profile /> */}
			</main>
		</>
	);
}

export default Homepage;
