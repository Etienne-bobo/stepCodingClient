import axios from 'axios'

export const ApiService = axios.create({
  baseURL: 'https://stpcoding-backend.herokuapp.com/',
})
