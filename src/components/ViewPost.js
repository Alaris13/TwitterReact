import React, { useEffect } from 'react';

function ViewPost() {
	return (
		<main className="main-view">
			<div className="main-view__user-feed viewpost">
				<div className="main-view__user-feed__author">
					<div className="name">
						<img
							src="/img/2.jpeg"
							alt="image tweet"
							className="img__viewpost"
						></img>
						<h2>Will Cannon</h2>
					</div>
					<div>
						<a href="#" className="username__author__viewpost">
							@iamwillcannon
						</a>
					</div>
					<a href="#" className="author_post__viewpost">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eveniet
						cumque commodi ea officia. Voluptate nemo maiores ullam similique.
						Eaque delectus amet natus dolores eveniet repudiandae omnis ratione
						tempore et.
					</a>

					<div className="author__stats">
						<a href="#">
							<span>4</span> Retweets
						</a>
						<a href="#">
							<span>25</span> Likes
						</a>
						<a href="#">
							<span>1</span> Quote Tweets
						</a>
					</div>
					<div className="icons__viewpost">
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
			<div className="main-view__user-tweet viewpost__textarea">
				<img src="/img/8.jpeg" alt="image tweet" />
				<form action="#" className="main-view__user-tweet__search">
					<textarea
						maxlength="250"
						id="textBox1"
						name="content"
						TextMode="MultiLine"
						className="main-view__user-tweet__input"
						onkeyup="setHeight('textBox1');"
						onkeydown="setHeight('textBox1');"
						placeholder="Tweet your reply"
					></textarea>
				</form>
				<a href="#" className="main-view__user-tweet__button">
					Reply
				</a>
			</div>

			<div className="main-view__user-feed">
				<img src="/img/jacy2.jpeg" alt="image tweet"></img>
				<div className="main-view__user-feed__author">
					<div className="name">
						<h2>Gloria Monroe</h2>
						<a href="#" className="username__author">
							@gloriamonroe
						</a>
					</div>
					<p className="reply-p">
						Replying to <a href="">@iamwillcannon</a>
					</p>
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
		</main>
	);
}

export default ViewPost;
