import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Axios from 'axios';

import Container from './Container';

function Main() {
	const [text, setText] = useState('');
	const [tweet, setTweet] = useState([]);

	function handleClick(e) {
		e.preventDefault();

		setTweet([
			...tweet,
			{
				text: text,
				id: Math.random(),
			},
		]);

		console.log(tweet);

		setText('');

		console.log(text);
	}

	return (
		<main className="main-view">
			<div className="main-view__user-tweet">
				<img src="./img/8.jpeg" alt="image tweet" className="footer-pic"></img>
				<form className="main-view__user-tweet__search">
					<textarea
						value={text}
						maxlength="250"
						id="textBox1"
						name="content"
						TextMode="MultiLine"
						className="main-view__user-tweet__input"
						onkeyup="setHeight('textBox1');"
						onkeydown="setHeight('textBox1');"
						placeholder="What is happening?"
						onChange={(e) => setText(e.target.value)}
					></textarea>
				</form>
				<Link
					onClick={handleClick}
					to="#"
					className="main-view__user-tweet__button"
				>
					Tweet
				</Link>
			</div>

			<div className="main-view__user-feed">
				<img src="./img/mary1.jpeg" alt="image tweet"></img>
				<div className="main-view__user-feed__author">
					<div className="name">
						<h2>Will Cannon</h2>
						<a href="#" className="username__author">
							@iamwillcannon
						</a>
					</div>
					<Link to="/post/1234" className="author_post-viewpost">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eveniet
						cumque commodi ea officia. Voluptate nemo maiores ullam similique.
						Eaque delectus amet natus dolores eveniet repudiandae omnis ratione
						tempore et.
					</Link>
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
				<img src="./img/jacy2.jpeg" alt="image tweet"></img>
				<div className="main-view__user-feed__author">
					<div className="name">
						<h2>Gloria Monroe</h2>
						<a href="#" className="username__author">
							@gloriamonroe
						</a>
					</div>
					<a href="#" className="author_post">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
						voluptatem iure non quis blanditiis, labore deserunt assumenda
						cupiditate quibusdam quod! Dignissimos, autem nulla! Illum eum,
						suscipit adipisci nulla autem odio non modi! Autem, architecto.
						Error vero corporis aspernatur vitae alias iure, voluptate quaerat
						possimus illum.
					</a>
					<div className="icons">
						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-bubble2"></use>
									</svg>
									<span>16</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-loop2"></use>
									</svg>
									<span>22</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-heart"></use>
									</svg>
									<span>225</span>
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
				<img src="./img/nick1.jpeg" alt="image tweet"></img>
				<div className="main-view__user-feed__author">
					<div className="name">
						<h2>Harry A.Jones</h2>
						<a href="#" className="username__author">
							@harryjones
						</a>
					</div>
					<a href="#" className="author_post">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
						aliquid excepturi quam, ipsum minima distinctio? Amet, quidem.
						Delectus ad nobis nisi iure.
					</a>
					<div className="icons">
						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-bubble2"></use>
									</svg>
									<span>1</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-loop2"></use>
									</svg>
									<span>52</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-heart"></use>
									</svg>
									<span>92</span>
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
				<img src="./img/2.jpeg" alt="image tweet"></img>
				<div className="main-view__user-feed__author">
					<div className="name">
						<h2>Dale Hall</h2>
						<a href="#" className="username__author">
							@dalehall
						</a>
					</div>
					<a href="#" className="author_post">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro
						tempore, assumenda nam cumque necessitatibus minus! Quaerat dolorem
						et amet non inventore magnam aliquid optio, iure quisquam deserunt
						minima quos rerum.
					</a>
					<div className="icons">
						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-bubble2"></use>
									</svg>
									<span>1</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-loop2"></use>
									</svg>
									<span>2</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-heart"></use>
									</svg>
									<span>32</span>
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
				<img src="./img/4.jpeg" alt="image tweet"></img>
				<div className="main-view__user-feed__author">
					<div className="name">
						<h2>Deborah Fox</h2>
						<a href="#" className="username__author">
							@deborahhhhh
						</a>
					</div>

					<a href="#" className="author_post">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
						deserunt suscipit ab, necessitatibus dolor aperiam.
					</a>

					<div className="icons">
						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-bubble2"></use>
									</svg>
									<span>32</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-loop2"></use>
									</svg>
									<span>211</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-heart"></use>
									</svg>
									<span>442</span>
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
				<img src="./img/5.jpeg" alt="image tweet"></img>
				<div className="main-view__user-feed__author">
					<div className="name">
						<h2>Mango Powel</h2>
						<a href="#" className="username__author">
							@deborahhhhh
						</a>
					</div>
					<a href="#" className="author_post">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
						deserunt suscipit ab, necessitatibus dolor aperiam.
					</a>
					<div className="icons">
						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-bubble2"></use>
									</svg>
									<span>32</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-loop2"></use>
									</svg>
									<span>211</span>
								</a>
							</li>
						</section>

						<section>
							<li className="top-nav__item top-nav__item--active">
								<a href="#" className="top-nav__link">
									<svg className="top-nav__icon">
										<use xlinkHref="img/sprite.svg#icon-heart"></use>
									</svg>
									<span>442</span>
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

export default Main;
