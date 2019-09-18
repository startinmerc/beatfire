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
