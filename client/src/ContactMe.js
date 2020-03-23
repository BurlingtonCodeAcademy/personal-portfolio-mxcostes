import React, { Component } from 'react'
import FooterForm from './FooterForm'

// contact me form to submit an email

export class ContactMe extends Component {
    constructor(props){  
        super(props);  

        this.state= {
         name: '',
         email: '',
         message: ''
    
        }  
        
    }
    

	onNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};

	onMessageChange = (event) => {
		this.setState({ message: event.target.value });
  };
  
  handleSubmit=(e)=> {
    e.preventDefault();

    fetch('http://localhost:3000/contact',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
}

  resetForm = () => {
    
    this.setState({name: '', email: '', message: ''})
 }
        
    render() {
        return (
            <div id='contactForm'>
                <h1>Contact me using using the form below</h1>
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                <div className="containerQC">
                  <div className="colunm1">
                    <div class="nameQC emailQC">
                      <input id="input-name" type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange}></input>
                      <input id="input-email" type="text" placeholder="Email" value={this.state.email} onChange={this.onEmailChange}></input>
                    </div>
                    <div className="commentQC">
                      <textarea name="comment section" id="comment-area" placeholder="Comment" value={this.state.message} onChange={this.onMessageChange}></textarea>
                    </div>
                    <div className="buttonQC">
                      <button type='submit' className="learn-more-button"><i class="fas fa-envelope"></i> Send Message</button>
                    </div>
                  </div>
                </div>
                </form>
            </div>
        )
    }
}

export default ContactMe
