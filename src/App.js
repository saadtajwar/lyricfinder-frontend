import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TopTenTracks from './components/TopTenTracks'
import SingleTrack from './components/SingleTrack'
import Search from './components/Search'
import Header from './components/Header'
import RegisterForm from './components/RegisterForm'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import LogoutButton from './components/LogoutButton'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

const App = () => {
  const [topTen, setTopTen] = useState(null);
  const [notif, setNotif] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(()=> {
      const getTopTen = async () => {
        const result = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`);
        setTopTen(result.data.message.body.track_list);
      }
      getTopTen();
    }, [])

    useEffect(()=> {
      const loggedUser = window.localStorage.getItem('loggedUser');
      if (loggedUser) {
        const existingUser = JSON.parse(loggedUser);
        setUser(existingUser);
      }
    }, [])

    console.log('lol', user);



  return (
    <Router>
      <Notification message={notif} />
      <Header user={user} />
      <Routes>
        <Route path='/login' element={<LoginForm user={user} setUser={setUser} setNotif={setNotif} />} />
        <Route path='/register' element={<RegisterForm setNotif={setNotif} />} />
        <Route path='/search' element={<Search />} />
        <Route path='/tracks/:id' element={<SingleTrack topTen={topTen} />} />
        <Route path='/' element={<TopTenTracks topTen={topTen} />} />
      </Routes>
      <LogoutButton setUser={setUser} user={user} />
    </Router>
  )
}

export default App;
