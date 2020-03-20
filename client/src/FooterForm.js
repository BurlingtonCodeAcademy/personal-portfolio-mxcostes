import React, { Component } from 'react'

export class FooterForm extends Component {
    render() {
        return (
          
            
                <div className="containerQC">
                  <div className="colunm1">
                    <div class="nameQC emailQC">
                      <input id="input-name" type="text" placeholder="Name"></input>
                      <input id="input-email" type="text" placeholder="Email"></input>
                    </div>
                    <div className="commentQC">
                      <textarea name="comment section" id="comment-area" placeholder="    Comment"></textarea>
                    </div>
                    <div className="buttonQC">
                      <a className="learn-more-button"><i class="fas fa-envelope"></i> Send Message</a>
                    </div>
                  </div>
                </div>
             
        )
    }
}

export default FooterForm
