import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import songService from '../services/songs'

const SingleTrack = ({user, setUser}) => {
    const id = useParams().id;
    const [trackObj, setTrackObj] = useState(null);
    const [disabledButton, setDisabledButton] = useState(false);

    useEffect(()=>{
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${id}&apikey=${process.env.REACT_APP_API_KEY}`).then(res => setTrackObj(res.data));
    }, [id])

    useEffect(()=> {
        if (trackObj && trackObj.message.body.length > 0) {
            const foundSong = user.songs.find(song => song.commontrack_id == trackObj.message.body.track.commontrack_id);
            if (foundSong) {
                setDisabledButton(true);
            } else {
                setDisabledButton(false);
            }
        }
    }, [user, trackObj])

    if (!trackObj || trackObj.message.body.length === 0) {
        return null
    }

    const handleSave = async () => {
        const saveObj = {
            commontrack_id: trackObj.message.body.track.commontrack_id,
            track_name: trackObj.message.body.track.track_name,
            userId: user.id
        };
        const newUser = await songService.saveSong(saveObj);
        setUser(newUser);
    }

    
    return (
        <div className="box">
            <h1 className="title">Song Information</h1>
            <p>Track name: {trackObj.message.body.track.track_name}</p>
            <p>Songwriter: {trackObj.message.body.track.artist_name}</p>
            {user &&
            <> 
            <button disabled={setDisabledButton ? "true" : ""} onClick={handleSave}>Save to favorites</button>
            </>
            }
        </div>
    )
}

export default SingleTrack
