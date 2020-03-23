import React, { Component } from 'react';

function About(props) {
	return (
		<div id="aboutMe">
			<h1>A little bit about me..</h1>
			<div className="textBox aboutContent">
				<img
					className="aboutImage"
					src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/32350004_2143233049037768_7264276829962240000_o.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=RW_5ivQ_0wIAX9OX7FH&_nc_ht=scontent-iad3-1.xx&oh=53e82482c67422334051aa5e0dd3cd2b&oe=5E9F0392"
				/>
				<span id='aboutSpan'>
					I grew up in small town in Vermont, always curious about the world outside. Fueled by that curiosity and particular interests in history and geography a desire to travel grew. After attending the University of Vermont where I graduated with BS in business administration  I  quickly fell into a managerial position in a small moving company,
					where I gained experience in many aspects of running the business from hiring, project management, logistics, and customer service. After saving up some money I decided to travel while I was young and still unsure of if what I was doing was what I wanted to commit myself to for a lifelong career. Between 2017-2019 I spent a year aborad traveling with friends and volunteering in
					different countries getting the chance to work with people from around the world. From this experiene I gained perspective on what I was hoping to accomplish and be able to do down the road.
					With this in mind I decided to search for careers that may allow me to live the life I had imagined. In my search I found software development and with it something I could enjoy doing for many years. After experimenting with online tutorials and exploring documentations I found coding to be challenging in the most satisfying way. The more I learned the more I wanted to continue working to improve.
					After some time I decided to fully commit to pursing a career in software development. I enrolled in Burlington Code Academy and feel more confident than ever that this is exactly what I want to be doing. 
					After graduating I will be pursuing opportunites to continue growing in the field in New York City a place that is full of exciting opportunities in the field. I'm very excited for what lies ahead.

				</span>
			</div>
		</div>
	);
}

export default About;
