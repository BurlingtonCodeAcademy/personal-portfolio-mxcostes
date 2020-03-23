import React, { Component } from 'react';

export class Hobbies extends Component {
	render() {
		return (
			<div id="hobbiesContainer">
                <div id='hobbiesBioContainer'>
                <h1>Hobbies and Interests</h1>
				<p className='textBox'>
					I have a wide range of hobbies that keep me busy.  I believe in staying busy by doing things that will allow for self imporvement althoug at times I feel that my judgement determining what self improvementis can be subjective.
					Activities I enjpy the most are hiking with friends through foreign countries, pick up basketball, and going to YouTube and Wikipedia rabbit holes deep diving through historical events, marvel character backgrounds, or the creation of Middle Earth.
					I enjoy taking on outdoor physical activities with other and have found myself enoying biking, hiking kayaking and skiing, depending on the location and time of year. The hobby that has dominated vacation time for the past 4 years is traveling with friends and family.


				</p>
				</div>
                <div className="photoGallery">
					
						<div id="landing-images">
                            {/* --------------------column 1------------------------- */}
							<div className="column">
								<div class="img-with-caption">
									<img class="landing-image" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/30530949_2101222933238780_4398519880924528640_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=od5HNCOhNdgAX-bblN9&_nc_ht=scontent-iad3-1.xx&oh=b1a0b4beb2f918bb7f90046cff1a046e&oe=5E9D9393" alt="Hanging Lake Ushaia AR" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/24852516_1947425565285185_4565985031008093724_n.jpg?_nc_cat=101&_nc_sid=d4cf07&_nc_ohc=AVbtYZ26icMAX87UFOU&_nc_ht=scontent-iad3-1.xx&oh=c0dfcc3222e059cb7158a797457e223c&oe=5E9D65F2" alt="Basketball at Marshhangdi boarding school" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/23467453_1944448352235494_3026079356738193334_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=_sa8hNGEHTwAX-2pH5v&_nc_ht=scontent-iad3-1.xx&oh=c942a3b1442fb7dda089e2a9da26f647&oe=5E9C3216" alt="Kala Patthar Summit" />
								</div>
							</div>
							{/* ---------------------column 2--------------------------- */}
							<div className="column">
								<div class="img-with-caption">
									<img class="landing-image" src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/27021800_1758474340831574_9123800766650810921_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=jbrxQbrfgJ4AX8qOWpX&_nc_ht=scontent-iad3-1.xx&oh=218bb014c7335ddcaaf49d59d52595c8&oe=5E9DCEC3" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/64636766_2836568356370897_3783029880334057472_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=rcgBy_WSQ5QAX_omdpV&_nc_ht=scontent-iad3-1.xx&oh=ca413d7d5944aac471399916d6931e20&oe=5E9CAC54" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66489003_2843323179028748_5233291988022853632_n.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=ml-03B5pnKoAX8SOgCq&_nc_ht=scontent-iad3-1.xx&oh=c145fc2469de78ae138bc410f30eb741&oe=5E9C28B6" alt="" />
								</div>
							</div>
							{/* --------------------------column 3 -------------------------------*/}
							<div className="column">
								<div class="img-with-caption">
									<img class="landing-image" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/30762901_2116101688417571_1176712999201669120_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=C3Mpi3wgk1oAX91VXIL&_nc_ht=scontent-iad3-1.xx&oh=9768a109726196cfb18ff73d600309ed&oe=5E9B9809" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/32459409_2143181852376221_3898741504788660224_o.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=rff-ul0Grm0AX-uVgf6&_nc_ht=scontent-iad3-1.xx&oh=fb4bdf1575da6783badce9b4bf38bd76&oe=5E9D9652" alt="" />
								</div>
								<div class="img-with-caption">
									<img class="landing-image" src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/28336574_1797827216896286_2624170980770577103_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=_JgAsV3OX3AAX_ZKCWM&_nc_ht=scontent-iad3-1.xx&oh=aca0a37fc6107230bdf77d5f4719342f&oe=5E9A6304" alt="" />
								</div>
							</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default Hobbies;
