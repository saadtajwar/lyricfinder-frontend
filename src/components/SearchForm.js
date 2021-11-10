import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const SearchForm = () => {
    const [searchText, setSearchText] = useState('');
    const [tracksToShow, setTracksToShow] = useState(null);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

  // base url: https://api.musixmatch.com/ws/1.1/
  //apikey = process.env.REACT_APP_API_KEY
  // http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc


    const handleSearch = async (event) => {
        event.preventDefault();
        const result = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchText}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`)
        setTracksToShow(result.data.message.body.track_list);
        setSearchText('');
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input value={searchText} onChange={handleSearchChange} />
                <button type="submit">Search</button>
            </form>
            {tracksToShow && 
                tracksToShow.map(tr => 
                    <Link to={`/tracks/${tr.track.track_id}`} className="box" key={tr.track.track_id}>{tr.track.track_name}</Link>
                    )
            }
        </div>
    )
}

export default SearchForm