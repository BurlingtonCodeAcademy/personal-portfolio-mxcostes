import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div id='headerLeft'>
                <a className='headerItems'>MGC</a>
                
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
                <a className='headerItems'>Contact Me</a>
                </div>
                
            </div>
        )
    }
}

export default Header

