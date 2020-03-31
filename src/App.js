import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Book from './components/Book';
import Info from './components/Info';
import Gigs from './components/Gigs';
import TweenMax from 'gsap';
import './App.css';

const App = ()=> {

	const [isCircle, setCircle] = useState(false);
		
	function svgMorph(id){
		const num = Number(id.split('-')[1]);
		if(num%2<1){
			TweenMax.to("#rect1", 1, {attr:{rx:"0%", height:"74%", width:"65%", x:"17.5%", y:"13%"}});
			setCircle(false)
		} else {
			TweenMax.to("#rect1", 1, {attr:{rx:"50%", height:"80%", width:"55%", x:"22.5%", y:"10%"}});
			setCircle(true)
		}
	};

	return (
		<>
		<svg id="svgBack" xmlns="http://www.w3.org/2000/svg">
			<rect id="rect1" rx="0%" x="17.5%" y="13%" width="65%" height="74%" />
		</svg>
		<Nav svgMorph={svgMorph}/>
		<main className="App">
			<Hero />
			<Book />
			<Info />
			<Gigs />
		</main>
		</>
	);
}

export default App;
