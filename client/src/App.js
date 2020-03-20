import React from 'react';
import './App.css';
import Header from './Header';
import Portrait from './Portrait';
import Footer from './Footer';
import About from './About'
import Features from './Features'
import {BrowserRouter} from 'react-router-dom'

function App() {
	return (
    <div className="App">
    <BrowserRouter>
			<Portrait />
      <Features />
			<Footer />
    </BrowserRouter>
		</div>
	);
}

export default App;


