import React, { useEffect } from 'react';

import Container from './Container';

function RightSideBar() {
	return (
		<main className="second-view">
			<div className="right-sidebar">
				<h2>What's happening?</h2>
			</div>
			<div className="right-follow">
				<li>
					<ul>
						<a href="#">
							Blinken cites 'credible' evidence Russia has stolen Ukrainian
							grain as world feels impact of food insecurity
						</a>
					</ul>
					<ul>
						<a href="#">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto, sit labore quas culpa hic quisquam?
						</a>
					</ul>
					<ul>
						<a href="#">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
							voluptate neque beatae officiis saepe sed dolore obcaecati nihil,
							officia sunt.
						</a>
					</ul>
					<ul>
						<a href="#">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
							voluptate neque beatae officiis saepe sed dolore obcaecati nihil,
							officia sunt.
						</a>
					</ul>
					<ul>
						<a href="#">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
							voluptate neque beatae officiis saepe sed dolore obcaecati nihil,
							officia sunt.
						</a>
					</ul>
				</li>
				<a href="#" className="btn-bottom">
					Show More
				</a>
			</div>

			<div className="right-footer">
				<h2>Who to follow?</h2>

				<div className="author1">
					<img
						src="/img/author3.jpg"
						alt="author 2"
						className="right-footer__img"
					></img>
					<a href="#" className="author1__name">
						Emri Mbiemri
					</a>
					<span>@embrimbiemri</span>
					<a className="btn-follow" href="#">
						Follow
					</a>
				</div>
				<div className="author2">
					<img
						src="/img/author3.jpg"
						alt="author 3"
						className="right-footer__img"
					></img>
					<a href="#" className="author1__name">
						Emri Mbiemri
					</a>
					<span>@embrimbiemri</span>
					<a className="btn-follow" href="#">
						Follow
					</a>
				</div>

				<div className="author3">
					<img
						src="/img/author3.jpg"
						alt="author 3"
						className="right-footer__img"
					></img>
					<a href="#" className="author1__name">
						Emri Mbiemri
					</a>
					<span>@embrimbiemri</span>
					<a className="btn-follow" href="#">
						Follow
					</a>
				</div>
				<a href="#" className="btn-bottom">
					Show More
				</a>
			</div>
		</main>
	);
}

export default RightSideBar;
