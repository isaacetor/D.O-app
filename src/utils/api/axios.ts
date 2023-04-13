import axios from "axios";

const instance = axios.create({
  baseURL: "https://dirty-online.onrender.com",
  headers: {
    "Content-Type": "Application/json",
  },
});

export default instance;
