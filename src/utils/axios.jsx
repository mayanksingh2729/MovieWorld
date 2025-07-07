import axios from 'axios'

const instance = axios.create({
    
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFiZDZkMzc0ZWY3YmJhOTUwYTFkODg2NzUxNzVmOCIsIm5iZiI6MTc1MDQxNTQzMC4yNDk5OTk4LCJzdWIiOiI2ODU1Mzg0NmRiYjYxODdiMzhmYzBhYTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zVW4YMIG6Qy6pzg7Az1LGPfsVaFfALGy1RK2TQglrA0'
  },
});

export default instance;