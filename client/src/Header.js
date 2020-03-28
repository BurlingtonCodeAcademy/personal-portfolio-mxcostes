import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPopUp: false
        }
    }
    render() {
        return (
            <div id='header'>
                <div id='headerLeft'>
                <span id='initials'>MGC</span>
                
                <Link to='/' className='headerItems'>
                    <span>Home</span>
                </Link>
                <Link to='/about' className='headerItems'>
                    <span>About</span>
                </Link>
                <Link to='/portfolio' className='headerItems'>
                    <span>Portfolio</span>
                </Link>
                <Link to='/hobbies' className='headerItems'>
                    <span>Hobbies</span>
                </Link>
                
                </div>
                <div id='headerRight'>
                    <Link to='/contact' className='headerItems'>
                <span>Contact Me</span>
                </Link>
                </div>
                
            </div>
        )
    }
}

export default Header

