import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
    const location = useLocation().pathname;
    const [displayOrNot, setDisplayOrNot] = useState(true);

    const visible = { display: displayOrNot ? "" : "none"};
    console.log(displayOrNot);

    useEffect(()=> {
        const setDisplaySearch = () => {
            if (location === '/search') {
                setDisplayOrNot(false);
            } else {
                setDisplayOrNot(true);
            }
        }
        setDisplaySearch();
    }, [location])
    
    return (
        <div>
            <div className="box">
                <Link to='/' className="title">LyricFinder</Link>
            </div>
            <div className="box" style={visible}>
                <Link to='/search' className="title">Search for Tracks by Artist or Song Title</Link>
            </div>
            <div className="box">
                <Link to='/register' className="title">Register</Link>
            </div>
        </div>
    )
}

export default Header
