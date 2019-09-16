import React from 'react';
import gif from '../../images/herogif.gif';
import './hero.css';

class HeroLetter extends React.Component {
	clickHandler(e){
		console.log(this.props.isClicked);
	}
	render(){
		let delay = this.props.i*0.5;
		return (
			<span id={`letter-${this.props.i}`} 
			style={ { color: this.props.isClicked ? 'blue' : 'red'} } 
			onClick={this.clickHandler.bind(this)}>
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
				<HeroLetter i={i} char={title[i]} isClicked={false} />
				)
		});
		return (
			<div className="container">
				<video autoPlay loop muted playsInline className="video-background">
				  <source src="" type="video/webm" />
				  <source src="" type="video/mp4" />
				</video>
				<img src={gif} className="video-background" alt="video-background"/>
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
