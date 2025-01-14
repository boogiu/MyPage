import axios from "axios";

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: `${REACT_APP_BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    authorization: "Bearer " + localStorage.getItem("token"),
  },
});
/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  function (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.log("RESPONSE ERROR", error);
    return Promise.reject(errorMessage);
  }
);

export default api;