import axios from 'axios';
const baseUrl = 'http://localhost:8008/api/users'

const createNew = async (credentials) => {
    const newUser = await axios.post(baseUrl, credentials);
    return newUser.data;
}

export default {createNew}