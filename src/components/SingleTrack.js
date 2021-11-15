import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const SingleTrack = ({topTen}) => {
    const id = useParams().id;
    const [trackObj, setTrackObj] = useState(null);

    useEffect(()=>{
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${id}&apikey=${process.env.REACT_APP_API_KEY}`).then(res => setTrackObj(res.data));
        console.log(trackObj)
    }, [id])

    if (!trackObj || trackObj.message.body.length === 0) {
        return null
    }

    // const test = () => {
    //     console.log(id);
    //     axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=5920049&apikey=${process.env.REACT_APP_API_KEY}`).then(res => console.log(res.data));
    // }
    
    return (
        <div className="box">
            <h1 className="title">Song Information</h1>
            <p>Track name: {trackObj.message.body.track.track_name}</p>
            <p>Songwriter: {trackObj.message.body.track.artist_name}</p>
            {/* View
            <button onClick={()=>console.log(trackObj)}>Click</button>
            <button onClick={test}>Test</button> */}
        </div>
    )
}

export default SingleTrack
