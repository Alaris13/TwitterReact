import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Container from './Container';

function Profile() {
	return (
		<main className="main-view-profile">
			<div className="user-profile">
				<img
					src="/img/random9.jpeg"
					className="user-profile__cover"
					alt="random pic"
				></img>
				<div className="user-profile__details">
					<img src="/img/8.jpeg" alt="photo profile"></img>
					<h2>Jessica Palmer</h2>
					<span>@jessicapalmer</span>
				</div>
			</div>
			<div className="user-profile--btn">
				<a href="#" className="">
					Edit Profile
				</a>
			</div>

			<div className="user-profile--desc">
				<a href="#" className="following gray-color">
					<span>277</span> Following
				</a>
				<a href="#" className="followers gray-color">
					<span>801</span> Followers
				</a>
			</div>
			<div className="empty-line">
				<nav className="profile-links">
					<a href="#">Tweets</a>
					<a href="#">Tweets & replies</a>
					<a href="#">Media</a>
					<a href="#">Like</a>
				</nav>
			</div>

			<div className="main-view__user-feed">
				<img src="./img/8.jpeg" alt="image tweet"></img>
				<div className="main-view__user-feed__author">
					<div className="name">
						<h2>Jessica Palmer</h2>
						<a href="#" className="username__author">
							@jessicapalmer
						</a>
						<span> 9 June</span>
					</div>
					<a href="/ViewPost.html" className="author_post-viewpost">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eveniet
						cumque commodi ea officia. Voluptate nemo maiores ullam similique.
						Eaque delectus amet natus dolores eveniet repudiandae omnis ratione
						tempore et.
					</a>
					<div className="icons">
						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-bubble2"></use>
									</svg>
									<span>3</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-loop2"></use>
									</svg>
									<span>4</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-heart"></use>
									</svg>
									<span>25</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-books"></use>
									</svg>
								</a>
							</li>
						</section>
					</div>
				</div>
			</div>

			<div className="main-view__user-feed">
				<img src="./img/8.jpeg" alt="image tweet"></img>
				<div className="main-view__user-feed__author">
					<div className="name">
						<h2>Jessica Palmer</h2>
						<a href="#" className="username__author">
							@jessicapalmer
						</a>
						<span> 8 June</span>
					</div>
					<a href="/ViewPost.html" className="author_post-viewpost">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eveniet
						cumque commodi ea officia. Voluptate nemo maiores ullam similique.
						Eaque delectus amet natus dolores eveniet repudiandae omnis ratione
						tempore et.
					</a>
					<div className="icons">
						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-bubble2"></use>
									</svg>
									<span>3</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-loop2"></use>
									</svg>
									<span>4</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-heart"></use>
									</svg>
									<span>25</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-books"></use>
									</svg>
								</a>
							</li>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Profile;
