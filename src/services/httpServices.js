import axios from "axios";

const axios = axios.create({
  baseUrl: "https://localhost:5000/api",
  withCredentials: true,
});

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};

export default http;
