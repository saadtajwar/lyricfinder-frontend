import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {

    // TODO: Refactor visibility to remove redundant code

    const location = useLocation().pathname;
    const [displaySearchOrNot, setDisplaySearchOrNot] = useState(true);
    const [registerVisibility, setRegisterVisibility] = useState(true);

    const searchVisible = { display: displaySearchOrNot ? "" : "none"};
    const registerVisible = { display: registerVisibility ? "" : "none"};

    useEffect(()=> {
        const setDisplaySearch = () => {
            if (location === '/search') {
                setDisplaySearchOrNot(false);
            } else {
                setDisplaySearchOrNot(true);
            }
        }
        const setDisplayRegister = () => {
            if (location === '/register' || location === '/login') {
                setRegisterVisibility(false);
            } else {
                setRegisterVisibility(true);
            }
        }
        setDisplaySearch();
        setDisplayRegister();
    }, [location])
    
    return (
        <div>
            <div className="box">
                <Link to='/' className="title">LyricFinder</Link>
            </div>
            <div className="box" style={searchVisible}>
                <Link to='/search' className="title">Search for Tracks by Artist or Song Title</Link>
            </div>
            <div className="box" style={registerVisible} >
                <Link to='/register' className="title">Register</Link>
            </div>
        </div>
    )
}

export default Header
