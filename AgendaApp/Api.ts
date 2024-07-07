import axios from "axios"
const URL = "http://192.168.3.10:8080/app-agenda/api/";
const api = axios.create({
    baseURL : URL
});

export default api;