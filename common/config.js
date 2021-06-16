import axios from 'axios'

export const ApiService = axios.create({
  baseURL: 'https://stepcoding-server.herokuapp.com/',
})
