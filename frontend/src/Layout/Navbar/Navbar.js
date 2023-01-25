import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"

function Navbar() {
  return (
    <nav>
        <div className='topnav'>
            <NavLink to={'/'}><h2>Studio</h2></NavLink>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/addpage'}>Add</NavLink></li>
                <li><NavLink>Services</NavLink></li>
                <li><NavLink>Portfolio</NavLink></li>
                <li><NavLink>About</NavLink></li>
                <li><NavLink>Team</NavLink></li>
                <li><NavLink>Contact</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar