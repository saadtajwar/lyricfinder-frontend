import React from 'react'
import {Link} from 'react-router-dom'

const ViewProfileButton = ({user}) => {

    if (!user) {
        return null;
    }

    return (
        <div>
            <Link to={`/users/${user.id}`}>View My Profile</Link>
        </div>
    )
}

export default ViewProfileButton
