import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route,  BrowserRouter} from 'react-router-dom'
import App from './App';
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Hobbies from './Hobbies'
import './index.css';
import * as serviceWorker from './serviceWorker';

function Router(props) {
    return(
        <div>
        <BrowserRouter>
            <Header />
        <Switch>
            <Route path= {'/'} component={App} />
            <Route path={'/about'} component={About} />
            <Route path={'/portfolio'} component={Portfolio} />
            <Route path={'/hobbies'} component={Hobbies} />
        </Switch>
        </BrowserRouter>
        </div>
    )
}


ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
