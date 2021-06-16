import axios from 'axios'

export const ApiService = axios.create({
  baseURL: process.env.strapiBaseUri,
})
