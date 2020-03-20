import React from 'react';
import './App.css';
import ContactMe from './ContactMe'

class App extends React.Component {
constructor(props) {
super(props)

this.state = {
  showContactForm: false 
}
}


  
    toggleContactForm=()=> {  
  this.setState({  
       showPopup: !this.state.showContactFOrm  
  });  
   }  
  

  render () {

  
	return (
    <div className="App">
    <ContactMe toggle={this.toggleContactForm}/>
		</div>
	);
}
}

export default App;


