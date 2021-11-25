import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Header = ({user}) => {

    // TODO: Refactor visibility to remove redundant code

    const location = useLocation().pathname;
    const [displaySearchOrNot, setDisplaySearchOrNot] = useState(true);
    const [registerVisibility, setRegisterVisibility] = useState(true);
    const [loginVisibility, setLoginVisibility] = useState(true);

    const searchVisible = { display: displaySearchOrNot ? "" : "none"};
    const registerVisible = { display: registerVisibility ? "" : "none"};
    const loginVisible = { display: loginVisibility ? "" : "none"};

    useEffect(()=> {
        const setDisplaySearch = () => {
            if (location === '/search') {
                setDisplaySearchOrNot(false);
            } else {
                setDisplaySearchOrNot(true);
            }
        }
        const setDisplayRegister = () => {
            if (location === '/register' || user) {
                setRegisterVisibility(false);
            } else {
                setRegisterVisibility(true);
            }
        }
        const setDisplayLogin = () => {
            if (location === '/login' || user) {
                setLoginVisibility(false);
            } else {
                setLoginVisibility(true);
            }
        }
        setDisplaySearch();
        setDisplayRegister();
        setDisplayLogin();
    }, [location, user])
    
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
            <div className="box" style={loginVisible} >
                <Link to='/login' className="title">Login</Link>
            </div>
        </div>
    )
}

export default Header
