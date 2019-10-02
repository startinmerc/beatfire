import React from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Gigs from './components/gigs';
import Sounds from './components/sounds';
import Contact from './components/contact';
import './App.css';

class App extends React.Component {

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
