import axios from "axios";


// https://taskcrafter-backend.onrender.com/api/    -->add this after development

const newRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL: "https://taskcrafter-backend.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
