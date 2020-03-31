import React from 'react';
import './nav.css';

const Nav = ({svgMorph})=>{

	function handleClick(e){
		svgMorph(e.target.id);
	}

	return (
		<div>
			<div className="controls">
				<button id="play">PLAY</button>
				<button id="stop">STOP</button>
			</div>
			<nav>
				<h6>
				<a href="#hero" onClick={handleClick} id="section-0">
					BEAT<br/>
					FIRE
				</a>
				</h6>
				<ul>
					<li><a href="#book" onClick={handleClick} id="section-1">BOOK</a></li>
					<li><a href="#info" onClick={handleClick} id="section-2">INFO</a></li>
					<li><a href="#gigs" onClick={handleClick} id="section-3">GIGS</a></li>
				</ul>
			</nav>
		</div>
	)
}

export default Nav