import React, { Component } from 'react';

function Portfolio(props) {
	return (
		<div id="portfolioContainer">
			<div>
				<h1>Portfolio</h1>{' '}
			</div>
			<div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
                    <label className="portfolioLabels">Guessing Game</label>
				<span>In this project we used x y and z to create a ...</span>
				</div>
                </div>
			</div>
			<div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
                    <label className="portfolioLabels">Zorkington</label>
				<span>In this project we used x y and z to create a ...</span>
				</div>
                </div>
			</div>
            <div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
                    <label className="portfolioLabels">Tic-Tac-Toe</label>
				<span>In this project we used x y and z to create a ...</span>
				</div>
                </div>
			</div>
            <div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
                    <label className="portfolioLabels">Remock</label>
				<span>In this project we used x y and z to create a ...</span>
				</div>
                </div>
			</div>
            <div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
                    <label className="portfolioLabels">Yelpinton</label>
				<span>In this project we used x y and z to create a ...</span>
				</div>
                </div>
			</div>
            <div className="project">
				<div className="portfolioItem">
					<img className="portfolioImages" src="https://www.filterforge.com/filters/4592.jpg" />
					<div className="projectDescription">
                    <label className="portfolioLabels">GeoVermonter</label>
				<span>In this project we used x y and z to create a ...</span>
				</div>
                </div>
			</div>
		</div>
	);
}

export default Portfolio;
