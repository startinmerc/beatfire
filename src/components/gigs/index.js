import React from 'react';
import './gigs.css';
class Gigs extends React.Component {
	render() {
		return (
			<section id="gigs">
				<h2>Gigs</h2>
				<table className="gig-grid">
					<thead><tr><th colSpan="3">September</th></tr></thead>
					<tbody>
						<tr>
							<td>01</td>
							<td>Jasper's Bar</td>
							<td>Milwuakee</td>
						</tr>
						<tr>
							<td>02</td>
							<td>Jasper's Bar</td>
							<td>Milwuakee</td>
						</tr>
						<tr>
							<td>03</td>
							<td>Jasper's Bar</td>
							<td>Milwuakee</td>
						</tr>
						<tr>
							<td>04</td>
							<td>Jasper's Bar</td>
							<td>Milwuakee</td>
						</tr>
						<tr>
							<td>05</td>
							<td>Jasper's Bar</td>
							<td>Milwuakee</td>
						</tr>
					</tbody>
				</table>
			</section>
		);
	}
}
export default Gigs;