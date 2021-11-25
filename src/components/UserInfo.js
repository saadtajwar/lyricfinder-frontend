import React from 'react'
import {useParams, Link} from 'react-router-dom'

const UserInfo = ({user}) => {
    const id = useParams().id;


    return (
        <div>
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <h2>Saved songs:</h2>
                {user.songs.map(song => 
                    <Link to={`/tracks/${song.commontrack_id}`} key={song.commontrack_id} className="box" >{song.track_name}</Link>
                    )}
        </div>
    )
}

export default UserInfo
