import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://en-burger.firebaseio.com/'
});

export default instance;

