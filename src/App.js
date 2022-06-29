import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import HomeGuest from './components/HomeGuest';
import Home from './components/Home';

import Header from './components/Header';
import Profile from './components/Profile';

import RightSideBar from './components/RightSideBar';
import SideBar from './components/SideBar';
import Main from './components/Main';
import ViewPost from './components/ViewPost';

function App() {
	const [home, setHome] = useState(false);

	return (
		<BrowserRouter>
			{home ? (
				<div className="container">
					{<Header />}
					<div className="content">
						<SideBar setHome={setHome} />

						<Switch>
							<Route path="/" element={<Main />} exact></Route>
							<Route path="/:username" element={<Profile />} exact></Route>
							<Route path="/post/:id" element={<ViewPost />} exact></Route>
						</Switch>
						<RightSideBar />
					</div>
				</div>
			) : (
				<HomeGuest setHome={setHome} />
			)}
		</BrowserRouter>
	);
}

export default App;
