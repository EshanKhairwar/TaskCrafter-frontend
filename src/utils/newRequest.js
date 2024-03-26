import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://taskcrafter-backend.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
