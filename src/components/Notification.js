import React from 'react'

const Notification = ({message}) => {

    if (!message) {
        return null;
    }

    return (
        <div className="notification is-primary is-light">
            {message}
        </div>
    )
}

export default Notification
