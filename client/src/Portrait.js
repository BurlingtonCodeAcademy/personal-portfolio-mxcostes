import React, { Component } from 'react';

export class Portrait extends Component {
	render() {
		return (
			<div>
			<h1>Max Costes</h1>
			<div className="textBox portraitContent">
				<span id='aboutSpan'>
					A software developer looking for opportunities to learn and grow.
				</span>
				<img
					className="aboutImage landing-images"
					src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/23116801_1908628419164900_2334069106963692423_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=0GH9HjBoMG0AX83ursw&_nc_ht=scontent-lga3-1.xx&oh=4aee2d52c4397dadd2719bd18adefbf4&oe=5E9E10E3"
				/>
			</div>
		</div>
		);
	}
}

export default Portrait;
