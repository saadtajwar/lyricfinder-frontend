import axios from 'axios';
const baseUrl = 'http://localhost:8008/api/login';

const login = async (credentials) => {
    const loggedUser = await axios.post(baseUrl, credentials);
    return loggedUser.data;
}

export default {login}