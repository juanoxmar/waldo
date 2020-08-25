import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://waldo-b0ee6.firebaseio.com/',
});

export default instance;
