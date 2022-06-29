import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from './Container';

function SideBar({ setHome }) {
	const handleLogOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('username');
		setHome(false);
	};

	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<li className="side-nav__item">
					<Link to="/" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-home3"></use>
						</svg>

						<span>Home</span>
					</Link>
				</li>

				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-hash"></use>
						</svg>

						<span>Explore</span>
					</a>
				</li>

				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-bell"></use>
						</svg>

						<span>Notifications</span>
					</a>
				</li>

				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-mail4"></use>
						</svg>

						<span>Messages</span>
					</a>
				</li>

				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-bookmark"></use>
						</svg>

						<span>Bookmarks</span>
					</a>
				</li>

				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-profile"></use>
						</svg>

						<span>Lists</span>
					</a>
				</li>

				<li className="side-nav__item">
					<Link to="/profile" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-user"></use>
						</svg>

						<span>Profile</span>
					</Link>
				</li>

				<li className="side-nav__item">
					<a onClick={handleLogOut} href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-books"></use>
						</svg>

						<span>Log out</span>
					</a>
				</li>
			</ul>
			<div className="legal">
				<img src="/img/8.jpeg" alt="footer pic" className="footer-pic"></img>
				<div className="legal__user">
					<h3>Jessica Palmer</h3>
					<span>@jessicapalmer</span>
				</div>

				<svg>
					<use xlinkHref="img/sprite.svg#icon-profile"></use>
				</svg>
			</div>
		</nav>
	);
}

export default SideBar;
