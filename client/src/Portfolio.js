import React, { Component } from 'react';

function Portfolio(props) {
	return (
		<div id="portfolioContainer">
			<div>
				<h1>Portfolio</h1>{' '}
			</div>
					<a href='https://github.com/BurlingtonCodeAcademy/guess-the-number-mxcostes'>
			<div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
						<label className="portfolioLabels">Guessing Game</label>
						<span>
							In this project we practiced variable assignment and manipulation. We ultimately practiced ask await async funcitons 
							utilizing them in a node environemt where user input dictated how the game would adjust the parameters of future guesses.
							
							</span>
					</div>
				</div>
			</div>
					</a>
			<a href='https://github.com/BurlingtonCodeAcademy/zorkington-bapzen'>
			<div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
						<label className="portfolioLabels">Zorkington</label>
						<span>In this project we used x y and z to create a ...</span>
					</div>
				</div>
			</div>
				</a>
					<a href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-mxcostes'>
			<div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
						<label className="portfolioLabels">Tic-Tac-Toe</label>
						<span>In this project we used x y and z to create a ...</span>
					</div>
				</div>
			</div>
			</a>
				<a href='https://github.com/BurlingtonCodeAcademy/remock-mxcostes'>
			<div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
						<label className="portfolioLabels">Remock</label>
						<span>In this project we used x y and z to create a ...</span>
					</div>
				</div>
			</div>
			</a>
			<a href='https://github.com/BurlingtonCodeAcademy/yelpington-mxcostes'>
			<div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
						<label className="portfolioLabels">Yelpinton</label>
						<span>In this project we used x y and z to create a ...</span>
					</div>
				</div>
			</div>
			</a>
			<a href='https://github.com/BurlingtonCodeAcademy/geo-vermonter-mxcostes'>
			<div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
						<label className="portfolioLabels">GeoVermonter</label>
						<span>In this project we used x y and z to create a ...</span>
					</div>
				</div>
			</div>
			</a>
		</div>
	);
}

export default Portfolio;
						
