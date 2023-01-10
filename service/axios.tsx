import axios from 'axios'

const url = 'https://recruitment-api-production.up.railway.app'
// const url = 'http://localhost:8000'
const api =axios.create({
  baseURL: url,
});

export default api

