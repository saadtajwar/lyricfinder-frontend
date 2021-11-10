import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TopTenTracks from './components/TopTenTracks'
import SingleTrack from './components/SingleTrack'
import Search from './components/Search'
import Header from './components/Header'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

const App = () => {
  const [topTen, setTopTen] = useState(null);

  useEffect(()=> {
      const getTopTen = async () => {
        const result = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`);
        setTopTen(result.data.message.body.track_list);
      }
      getTopTen();
    }, [])


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='search' element={<Search />} />
        <Route path='/tracks/:id' element={<SingleTrack topTen={topTen} />} />
        <Route path='/' element={<TopTenTracks topTen={topTen} />} />
      </Routes>
    </Router>
  )
}

export default App;
