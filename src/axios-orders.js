import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-8c506-default-rtdb.firebaseio.com/'
})

export default instance;