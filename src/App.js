import React from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Gigs from './components/gigs';
import Sounds from './components/sounds';
import Contact from './components/contact';
import TweenMax from 'gsap';
import './App.css';

class App extends React.Component {
	toCircle(){
		TweenMax.to("#rect1", 1, {attr:{rx:"50%", height:"80%", width:"55%", x:"22.5%", y:"10%"}, skewX: "0deg"});
	};

	toSquare(){
		TweenMax.to("#rect1", 1, {attr:{rx:"0%", height:"74%", width:"65%", x:"17.5%", y:"13%"}, skewX: "0deg"});
	};

	render() {
		return (
			<div className="App">
				<Nav />
				<svg  xmlns="http://www.w3.org/2000/svg">
					<rect id="rect1" rx="0" x="17.5%" y="13%" width="65%" height="74%" />  
				</svg>
				<Hero />
				<About />
				<Gigs />
				<Sounds />
				<Contact />
			</div>
		);
	}
}

export default App;
