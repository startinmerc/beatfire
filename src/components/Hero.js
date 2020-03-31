import React from 'react';
import gif from '../images/herogif.gif';

const videoBackgroundStyles = {
  position: "absolute",
  zIndex: "-1",
  width: "100%",
  height: "100%",
  filter: "grayscale(1)",
  left: "0",
  top: "0"
};

const heroStyles = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  scrollSnapAlign: "start",
};

const HeroLetter = ({	index,char })=>(
	<span id={`letter-${index}`} className="header-letter">
		{char}
	</span>
);

const Hero = ()=>{
	const title = "BEATFIRE";
	let header = title.split("").map((v,i)=>(
			<HeroLetter key={`letter-${i}}`} i={i} char={v} />
		)
	);
	return (
		<div id="hero" style={heroStyles}>
			<img src={gif} style={videoBackgroundStyles} alt=""/>
			<div>
				<h1 style={{fontSize: "15rem", margin: 0}}>
					{header.slice(0,4)}
				</h1>
				<h1 style={{fontSize: "15rem", margin: 0}}>
					{header.slice(4)}
				</h1>

			</div>
		</div>
	);
};

export default Hero;
