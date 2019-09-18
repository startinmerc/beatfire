import React from 'react';
import './sounds.css';
class Sounds extends React.Component {
	render() {
		return (
			<section id="sounds">
				<h2>Sounds</h2>
				<div className="sounds-container">
					<div className="sound" id="sound-1">Sound 1 <br/><span className="play">|></span></div>
					<div className="sound" id="sound-2">Sound 2 <br/><span className="play">|></span></div>
					<div className="sound" id="sound-3">Sound 3 <br/><span className="play">|></span></div>
					<div className="sound" id="sound-4">Sound 4 <br/><span className="play">|></span></div>
				</div>
			</section>
		);
	}
}
export default Sounds;