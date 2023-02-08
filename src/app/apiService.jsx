import axios from "axios";
import { API_URL } from "./environment"

const apiService = axios.create({
    baseURL: API_URL,
});

apiService.interceptors.request.use(
    (request) => {
      console.log("Start reques", request);
      return request;
    },
    function (error) {
      console.log("REQUEST ERROR", error);
      const message = error.request?.data?.errors?.message || "Unknown Error";
      return Promise.reject({ message });
    }
  );
  
  apiService.interceptors.response.use(
    (response) => {
      console.log("START RESPONSE", response);
      return response;
    },
  
    function (error) {
      console.log("RESPONSE ERROR", error);
      const message = error.response?.data?.errors?.message || "Unknown Error";
      return Promise.reject({ message });
    }
  );
  
  export default apiService;