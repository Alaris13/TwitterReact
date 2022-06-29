import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Container from './Container';

function HomeGuest({ setHome }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		const dataStorage = localStorage.getItem('username');

		if (dataStorage) {
			setHome(true);
		} else {
			setHome(false);
		}
	}, []);

	function handleRegister(e) {
		e.preventDefault();
		localStorage.setItem('username', username);

		setHome(true);
	}

	return (
		<div className="container-home-guest">
			<div className="front-side">
				<section>
					<img
						src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
						className="right-logo"
						alt="twitter logo"
					></img>
				</section>
			</div>
			<div className="front-side__right">
				<section>
					<img
						src="https://abs.twimg.com/errors/logo46x38.png"
						alt="twitter logo"
						className="small-logo"
					></img>
					<h1>Happening now</h1>
					<h2>Join Twitter Now</h2>

					<form className="form-class">
						<label htmlFor="username">Username</label>
						<input
							onChange={(e) => setUsername(e.target.value)}
							type="text"
							placeholder="Your username"
						></input>
						<label htmlFor="email">Email</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							placeholder="Your email"
						></input>
						<label htmlFor="password">Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							placeholder="Your password"
						></input>
						<Link onClick={handleRegister} to="/" className="register-btn">
							Register Now
						</Link>
					</form>
				</section>
			</div>
		</div>
	);
}

export default HomeGuest;
