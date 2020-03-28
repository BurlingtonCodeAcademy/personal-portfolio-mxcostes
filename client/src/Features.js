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
							<img class="landing-image imageSizing" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66647650_2843323422362057_8529274823258406912_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=2aSvT_46tSwAX8ZvGkQ&_nc_ht=scontent-iad3-1.xx&oh=03c8e775969a47ef2eed454b5b8dec20&oe=5E9B9370" alt="" />
							<label>About Me</label>
                            </Link>
						</div>
						<div class="img-with-caption">
                            <Link to='/portfolio'>
							<img class="landing-image imageSizing" src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/24068581_1937289839632091_5229818847671618351_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=b88FY-vY5QgAX-J3Dwm&_nc_ht=scontent-iad3-1.xx&oh=0484c3edfe5775080071ae39c988d668&oe=5E9B86EE" alt="" />
							<label>Portfolio</label>
                            </Link>
						</div>
						<div class="img-with-caption">
                            <Link to='/hobbies'>
							<img class="landing-image imageSizing" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/47378652_2465378083489928_7192535689114681344_n.jpg?_nc_cat=103&_nc_sid=d4cf07&_nc_ohc=hx01JuVLndMAX9N9v6G&_nc_ht=scontent-iad3-1.xx&oh=c7407131fcc826f55f78fa9c18405f8e&oe=5E9AE725" alt="" />
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
