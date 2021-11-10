import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SingleTrack from './SingleTrack'
import {Link} from 'react-router-dom'

const TopTenTracks = ({topTen}) => {

    if (!topTen) {
        return null;
    }
    
    return (
        <div>
            <h1 className="title">TopTenTracks</h1>
            {topTen.map(trackObj =>
                <Link to={`/tracks/${trackObj.track.track_id}`} className="box" key={trackObj.track.track_id}>{trackObj.track.track_name}</Link>
                )}
            {/* <button onClick={()=>console.log(topTen)}>Click</button> */}
        </div>
    )
}

export default TopTenTracks
