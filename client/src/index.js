import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './Header';
import Portrait from './Portrait';
import Features from './Features';
import About from './About';
import Portfolio from './Portfolio';
import Hobbies from './Hobbies';
import ContactMe from './ContactMe';
import Footer from './Footer';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Router extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showContactForm: false,
			name: '',
			email: '',
			message: ''
		};
	}



	render() {
		return (
			<div id = 'index'>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/" component={App}>
              <div id='portrait'>
							<Portrait />
							<Features />
              </div>
							<Footer />
						</Route>

						<Route path="/about" component={About}>
							<About />
							<Footer />
						</Route>
						<Route path="/portfolio" component={Portfolio}>
							<Portfolio />
							<Footer />
						</Route>
						<Route path="/hobbies" component={Hobbies}>
							<Hobbies />
							<Footer />
						</Route>
						<Route path="/contact" component={ContactMe}>
							<ContactMe handleSubmit={this.handleSubmit} toggleContactForm={this.toggleContactForm} onNameChange={this.onNameChange} onEmailChange={this.onEmailChange} onMessageChange={this.onMessageChange}/>
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

ReactDOM.render(<Router />, document.getElementById('root')); // If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
