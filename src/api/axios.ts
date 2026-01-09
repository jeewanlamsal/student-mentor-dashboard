import axios from "axios";

const api = axios.create({
  baseURL: "https://student-mentor-phase2.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // true only if backend uses cookies
});

export default api;
