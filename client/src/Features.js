import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from './About'

export class Features extends Component {
	render() {
		return (
			<div id='box'>
				<div className="featureContainer">
					<div id="landing-images">
						<div class="img-with-caption">
                            <Link to='/about'>
							<img class="landing-image" src="https://www.fillmurray.com/300/200" alt="" />
							<label>About Me</label>
                            </Link>
						</div>
						<div class="img-with-caption">
                            <Link to='/portfolio'>
							<img class="landing-image" src="https://www.placecage.com/300/200" alt="" />
							<label>Portfolio</label>
                            </Link>
						</div>
						<div class="img-with-caption">
                            <Link to='/hobbies'>
							<img class="landing-image" src="https://placekitten.com/300/200" alt="" />
							<label>Hobbies</label>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Features;
