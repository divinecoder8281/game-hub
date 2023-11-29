import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '646304b9a26848cf845b753d06ada040'
  }
})