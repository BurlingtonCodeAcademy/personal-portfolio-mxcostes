import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route,  BrowserRouter} from 'react-router-dom'
import App from './App';
import Header from './Header'
import Portrait from './Portrait'
import Features from './Features'
import About from './About'
import Portfolio from './Portfolio'
import Hobbies from './Hobbies'
import Footer from './Footer'
import './index.css';
import * as serviceWorker from './serviceWorker';

function Router(props) {
    return(
        <div>
        <BrowserRouter>
            <Header />
        <Switch>
      <Route exact path='/' component={App}>
			<Portrait />
      <Features />
      </Route>
      <Route path='/about' component={About}>
      <About />
      </Route>
      <Route path='/portfolio' component={Portfolio}>
        <Portfolio />
      </Route>
      <Route path='/hobbies' component={Hobbies}>
        <Hobbies />
      </Route>

      </Switch>
      <Footer />
        </BrowserRouter>
        </div>
    )
}


ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
