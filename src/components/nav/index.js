import React from 'react';
import './nav.css';

class Nav extends React.Component {
	render(){
		return (
		<div>
			<div className="controls">
				<button id="play">PLAY</button>
				<button id="stop">STOP</button>
			</div>
			<nav>
				<h6>
					BEAT<br/>
					FIRE
				</h6>
				<ul>
					<li><a href="#book">BOOK</a></li>
					<li><a href="#info">INFO</a></li>
					<li><a href="#gigs">GIGS</a></li>
				</ul>
			</nav>
		</div>
		)
	}
}

export default Nav