import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="box">
                <Link to='/' className="title">LyricFinder</Link>
            </div>
            <div className="box">
                <Link to='/search' className="title">Search for Tracks by Artist or Song Title</Link>
            </div>
            <div className="box">
                <Link to='/register' className="title">Register</Link>
            </div>
        </div>
    )
}

export default Header
