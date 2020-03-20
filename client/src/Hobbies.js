import React, { Component } from 'react';

export class Hobbies extends Component {
	render() {
		return (
			<div id="hobbiesContainer">
				<p>In my free time I like to</p>
				<div className="photoGallery">
					<div className="featureContainer">
						<div id="landing-images">
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
							{/* ---------------------row 2--------------------------- */}
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
							{/* --------------------------row 3 -------------------------------*/}
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
