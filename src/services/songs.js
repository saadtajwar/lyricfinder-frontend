import axios from 'axios';
const baseUrl = 'http://localhost:8008/api/songs';

const saveSong = async (songObj) => {
    const newUser = await axios.post(baseUrl, songObj);
    return newUser.data;
}

export default {saveSong}