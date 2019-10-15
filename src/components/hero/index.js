import React from 'react';
// import gif from '../../images/herogif.gif';
import './hero.css';

class HeroLetter extends React.Component {
	
	render(){
		return (
			<span id={`letter-${this.props.i}`} className="header-letter">
				{this.props.char}
			</span>
		)
	}
}

class Hero extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: ['B','E','A','T','F','I','R','E']
		}
	}
	render(){
		let header = this.state.title.map((v,i)=>{
			return (
				<HeroLetter key={`letter-${i}}`} i={i} char={this.state.title[i]} />
				)
		});
		return (
			<div id="hero">
				<video autoPlay loop muted playsInline className="video-background">
				  <source src="" type="video/webm" />
				  <source src="" type="video/mp4" />
				</video>
				<img src={'gif'} className="video-background" alt="video-background"/>
				<div className="text hero">
					<h1>
						{header.slice(0,4)}
					</h1>
					<h1>
						{header.slice(4)}
					</h1>

				</div>
			</div>
		)
	}
}

export default Hero;
