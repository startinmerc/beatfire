import React from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import './App.css';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Nav />
				<Hero />
			</div>
		);
	}
}

export default App;
