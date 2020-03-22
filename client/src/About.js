import React, { Component } from 'react';

function About(props) {
	return (
		<div id="aboutMe">
			<h1>A little bit about me..</h1>
			<div className="textBox aboutContent">
				<img
					className="imageSizing landing-images"
					src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/32350004_2143233049037768_7264276829962240000_o.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=RW_5ivQ_0wIAX9OX7FH&_nc_ht=scontent-iad3-1.xx&oh=53e82482c67422334051aa5e0dd3cd2b&oe=5E9F0392"
				/>
				<span id='aboutSpan'>
					Born and raised in Vermont. Attended UVM for a business degree. spent a year traveling and working
					abroad between 2017-2019. Have always been active...
				</span>
			</div>
		</div>
	);
}

export default About;
