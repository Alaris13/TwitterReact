import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useImmer } from 'use-immer';

import Axios from 'axios';

import Container from './Container';

function Main() {
	const [text, setText] = useState('');
	const [state, setState] = useImmer({
		profileData: {
			profileUsername: '...',
			counts: {
				likeCount: 0,
				retweetCount: 0,
				replyCount: 0,
				favCount: 0,
			},
		},
	});

	const loadedTweets = localStorage.getItem('tweet')
		? JSON.parse(localStorage.getItem('tweet'))
		: []; // new

	const [tweet, setTweet] = useState(loadedTweets);

	function handleChange(e) {
		setText(e.target.value);
	}

	useEffect(() => {
		saveToLocal();
	}, [tweet]);

	//Save to local

	function handleClick(e) {
		e.preventDefault();

		setTweet([
			...tweet,
			{
				text: text,
				id: Math.random(),
			},
		]);

		setText('');
	}

	const saveToLocal = () => {
		localStorage.setItem('tweet', JSON.stringify(tweet));
	};

	function startFollowing() {
		setState((draft) => {
			draft.profileData.counts.likeCount++;
		});
	}

	return (
		<main className="main-view">
			<div className="main-view__user-tweet">
				<img src="./img/8.jpeg" alt="image tweet" className="footer-pic"></img>
				<form className="main-view__user-tweet__search">
					<textarea
						className="main-view__user-tweet__input"
						value={text}
						maxLength="250"
						placeholder="What is happening?"
						onChange={handleChange}
					/>
				</form>
				<Link
					onClick={handleClick}
					to="#"
					className="main-view__user-tweet__button"
				>
					Tweet
				</Link>
			</div>

			{tweet
				.map((tweet, index) => (
					<div key={index} className="main-view__user-feed">
						<img src="./img/mary1.jpeg" alt="image tweet"></img>
						<div className="main-view__user-feed__author">
							<div className="name">
								<h2>Will Cannon</h2>
								<a href="#" className="username__author">
									@iamwillcannon
								</a>
							</div>
							<Link to="/post/1234" className="author_post-viewpost">
								{tweet.text}
							</Link>
							<div className="icons">
								<section>
									<li className="top-nav__item top-nav__item--active">
										<a href="#" className="top-nav__link">
											<svg className="top-nav__icon">
												<use xlinkHref="img/sprite.svg#icon-bubble2"></use>
											</svg>
											<span>{state.profileData.counts.replyCount}</span>
										</a>
									</li>
								</section>

								<section>
									<li className="top-nav__item top-nav__item--active">
										<a href="#" className="top-nav__link">
											<svg className="top-nav__icon">
												<use xlinkHref="img/sprite.svg#icon-loop2"></use>
											</svg>
											<span>{state.profileData.counts.retweetCount}</span>
										</a>
									</li>
								</section>

								<section>
									<li className="top-nav__item top-nav__item--active">
										<a
											onClick={startFollowing}
											href="#"
											className="top-nav__link"
										>
											<svg className="top-nav__icon">
												<use xlinkHref="img/sprite.svg#icon-heart"></use>
											</svg>
											<span>{state.profileData.counts.likeCount}</span>
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
				))
				.reverse()}
		</main>
	);
}

export default Main;
