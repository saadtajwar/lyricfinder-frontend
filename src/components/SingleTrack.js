import React from 'react'
import {useParams} from 'react-router-dom'

const SingleTrack = ({topTen}) => {
    const id = useParams().id;

    if (!topTen) {
        return null
    }

    const trackObj = topTen.find(tr => Number(tr.track.track_id) === Number(id));

    if (!trackObj) {
        return null;
    }
    
    return (
        <div className="box">
            <p>Track name: {trackObj.track.track_name}</p>
            <p>Songwriter: {trackObj.track.artist_name}</p>
            {/* <button onClick={()=>console.log(trackObj)}>Click</button> */}
        </div>
    )
}

export default SingleTrack
