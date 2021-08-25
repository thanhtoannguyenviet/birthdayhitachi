import axios from "axios";
import { ApiService } from "./apiService";

export const apiService = new ApiService(
  axios.create({
    timeout: 30000,
    baseURL: "http://localhost:8080",
  })
); 
