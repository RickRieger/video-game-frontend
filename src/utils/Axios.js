import axios from 'axios';
const Axios = axios.create({
  baseURL:
    process.env.REACT_APP_AXIOS === 'development'
      ? 'https://localhost:7260/api'
      : '/api',
  timeout: 50000,
});
export default Axios;
