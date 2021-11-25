import React from 'react'

const LogoutButton = ({setUser, user}) => {

    const handleLogout = () => {
        window.localStorage.clear();
        setUser(null);
    }

    if (!user) {
        return null;
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LogoutButton
