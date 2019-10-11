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
				<a href="#hero" onClick={this.props.toSquare}>
				<h6>
					BEAT<br/>
					FIRE
				</h6>
				</a>
				<ul>
					<li><a href="#book" onClick={this.props.toCircle}>BOOK</a></li>
					<li><a href="#info" onClick={this.props.toSquare}>INFO</a></li>
					<li><a href="#gigs" onClick={this.props.toCircle}>GIGS</a></li>
				</ul>
			</nav>
		</div>
		)
	}
}

export default Nav