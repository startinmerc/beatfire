import React from 'react';
import gif from '../../images/herogif.gif';
import './hero.css';

class HeroLetter extends React.Component {
	
	render(){
		return (
			<span id={`letter-${this.props.i}`}>
				{this.props.char}
			</span>
		)
	}
}

class Hero extends React.Component {

	render(){
		const title = ['B','E','A','T','F','I','R','E'];
		let header = title.map((v,i)=>{
			return (
				<HeroLetter key={`letter-${i}}`} i={i} char={title[i]} />
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
