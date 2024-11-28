import axios from "axios";
// jest.mock('axios');

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "API-Key": process.env.REACT_APP_API_KEY || "",
  },
});

export default api;
