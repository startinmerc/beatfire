import React from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import Book from './components/book';
import Info from './components/info';
import Gigs from './components/gigs';
import TweenMax from 'gsap';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			isCircle: false
		}
		this.svgMorph = this.svgMorph.bind(this);
	}

	svgMorph(){
		if(this.state.isCircle){
			TweenMax.to("#rect1", 1, {attr:{rx:"0%", height:"74%", width:"65%", x:"17.5%", y:"13%"}, skewX: "0deg"});
			this.setState({isCircle: false})
		} else {
			TweenMax.to("#rect1", 1, {attr:{rx:"50%", height:"80%", width:"55%", x:"22.5%", y:"10%"}, skewX: "0deg"});
			this.setState({isCircle: true})
		}
	};

	render() {
		return (
			<div className="App">
				<Nav svgMorph={this.svgMorph}/>
				<svg  xmlns="http://www.w3.org/2000/svg">
					<rect id="rect1" rx="0" x="17.5%" y="13%" width="65%" height="74%" />  
				</svg>
				<Hero />
				<Book />
				<Info />
				<Gigs />
			</div>
		);
	}
}

export default App;
