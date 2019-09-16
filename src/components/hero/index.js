import React from 'react';
import gif from '../../images/herogif.gif';
import './hero.css';

class Hero extends React.Component {
	render(){
		return (
			<div className="container">
				<video autoPlay loop muted playsInline className="video-background">
				  <source src="" type="video/webm" />
				  <source src="" type="video/mp4" />
				</video>
				<img src={gif} className="video-background" alt="video-background"/>
				<div className="text hero">
					<h1>
						<span id="letter-1">B</span><span id="letter-2">E</span><span id="letter-3">A</span><span id="letter-4">T</span>
					</h1>
					<h1>
						<span id="letter-5">F</span><span id="letter-6">I</span><span id="letter-7">R</span><span id="letter-8">E</span>
					</h1>

				</div>
			</div>
		)
	}
}

export default Hero