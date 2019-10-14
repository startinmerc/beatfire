import React from 'react';
import './book.css';

class Form extends React.Component {
	render(){
		return(
			<form>
				<label htmlFor="message">YOUR MSSG</label>
				<textarea/>
				<label htmlFor="message">YOUR MAIL</label>
				<input type="text"/>
			</form>
		)
	}
}

class Socials extends React.Component {
	render(){
		return(
			<ul>Socials
				<li>Facebook</li>
				<li>Instagram</li>
				<li>Twitter</li>
			</ul>
		)
	}
}


class Book extends React.Component {
	render() {
		return (
			<section id="book">
				<div className="header">
					<h2>Book</h2>
					<p>Available for bookings through all seasons everywhere. Come let us trash your place.</p>
				</div>
				<div className="content">
					<Form />
					<Socials />
				</div>
			</section>
		);
	}
}
export default Book;