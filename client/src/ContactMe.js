import React, { Component } from 'react'
import FooterForm from './FooterForm'

// contact me form to submit an email

export class ContactMe extends Component {
    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
        }  
        
         
        
    render() {
        return (
            <div>
                <FooterForm toggle={props.toggle}/>
            </div>
        )
    }
}

export default ContactMe
