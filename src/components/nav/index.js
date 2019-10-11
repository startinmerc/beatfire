import React from 'react';
import './nav.css';

class Nav extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.props.svgMorph(e.target.id);
	}

	render(){
		return (
		<div>
			<div className="controls">
				<button id="play">PLAY</button>
				<button id="stop">STOP</button>
			</div>
			<nav>
				<h6>
				<a href="#hero" onClick={this.handleClick} id="section-0">
				
					BEAT<br/>
					FIRE
				
				</a>
				</h6>
				<ul>
					<li><a href="#book" onClick={this.handleClick} id="section-1">BOOK</a></li>
					<li><a href="#info" onClick={this.handleClick} id="section-2">INFO</a></li>
					<li><a href="#gigs" onClick={this.handleClick} id="section-3">GIGS</a></li>
				</ul>
			</nav>
		</div>
		)
	}
}

export default Nav