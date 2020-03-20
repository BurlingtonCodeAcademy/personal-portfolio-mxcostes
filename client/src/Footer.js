import React, { Component } from 'react';
import FooterForm from './FooterForm.js';

export class Footer extends Component {
	render() {
		return (
			<div id='footer'>
				<div className="headerQC">
					<h3 className="QC">
						QUESTIONS AND COMMENTS? <b>GET IN TOUCH</b>
					</h3>
				</div>
                <div id='footerContentContainer'>
				<div className="column1">
					<FooterForm />
				</div>
				<div className="column2">
					<div className="contentQC">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur autem placeat libero
							enim quibusdam deleniti.
						</p>
					</div>
					<div className="addresses">
						<div className="addressStack1">
							<div className="stackItem">
								<i class="fab fa-twitter" /> @maxcostes11
							</div>
							<div className="stackItem">
								<i class="fab fa-facebook" /> Max Costes
							</div>
							<div className="stackItem">
								<i class="fas fa-envelope-square" /> mxcostes@gmail.com
							</div>
							<div className="stackItem">
                                <i class="fab fa-github"></i>github.com/mxcostes
							</div>
						</div>
						<div className="addressStack2">
							<div className="stackItem">
								<i class="fas fa-home" /> 401 East 75th, NY, NY 10021
							</div>
							<div className="stackItem">
								<i class="fas fa-phone" /> 802-782-7922
							</div>
							<div className="stackItem">
								<i class="fab fa-instagram" /> mgcostes
							</div>
						</div>
					</div>
				</div>
			</div>
            </div>
		);
	}
}

export default Footer;
