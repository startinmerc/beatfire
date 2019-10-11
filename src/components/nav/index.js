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
				<a href="#hero" onClick={this.props.svgMorph}>
				<h6>
					BEAT<br/>
					FIRE
				</h6>
				</a>
				<ul>
					<li><a href="#book" onClick={this.props.svgMorph}>BOOK</a></li>
					<li><a href="#info" onClick={this.props.svgMorph}>INFO</a></li>
					<li><a href="#gigs" onClick={this.props.svgMorph}>GIGS</a></li>
				</ul>
			</nav>
		</div>
		)
	}
}

export default Nav