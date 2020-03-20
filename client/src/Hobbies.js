import React, { Component } from 'react';

export class Hobbies extends Component {
	render() {
		return (
			<div id="hobbiesContainer">
                <div id='hobbiesBioContainer'>
                <h1>Hobbies and Interests</h1>
				<p id='hobbyBio'>In my free time I like to</p>
				</div>
                <div className="photoGallery">
					<div className="featureContainer">
						<div id="landing-images">
                            {/* --------------------column 1------------------------- */}
							<div className="column">
								<div class="img-with-caption">
									<img class="landing-image" src="https://www.fillmurray.com/300/200" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://www.placecage.com/300/200" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://placekitten.com/300/200" alt="" />
								</div>
							</div>
							{/* ---------------------column 2--------------------------- */}
							<div className="column">
								<div class="img-with-caption">
									<img class="landing-image" src="https://www.fillmurray.com/300/200" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://www.placecage.com/300/200" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://placekitten.com/300/200" alt="" />
								</div>
							</div>
							{/* --------------------------column 3 -------------------------------*/}
							<div className="column">
								<div class="img-with-caption">
									<img class="landing-image" src="https://www.fillmurray.com/300/200" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://www.placecage.com/300/200" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://placekitten.com/300/200" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Hobbies;
