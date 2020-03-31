import React from 'react';

const bookStyles = {
	display: "flex",
	textAlign: "center"
};

const contentStyles = {
	display: "flex"
};

const formStyles = {
	display: "flex",
	flexDirection: "column"
};

const ulStyles = {
	listStyle: "none"
};

const Book =()=>(
	<section id="book" style={bookStyles}>
		<h2>Book</h2>
		<p>Available for bookings through all seasons everywhere. Come let us trash your place.</p>
		<div style={contentStyles}>
			<form style={formStyles}>
				<label htmlFor="message">YOUR MSSG</label>
				<textarea/>
				<label htmlFor="message">YOUR MAIL</label>
				<input type="text"/>
			</form>
			<ul style={ulStyles}>Socials
				<li>Facebook</li>
				<li>Instagram</li>
				<li>Twitter</li>
			</ul>
		</div>
	</section>
);

export default Book;
