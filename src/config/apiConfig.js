
import axios from 'axios';
const DEPLOYED='https://blue-green-sockeye-cape.cyclic.app/'
const LOCALHOST='http://localhost:5454'
const jwt = localStorage.getItem("jwt")

export const API_BASE_URL = DEPLOYED;

const api = axios.create({
  baseURL: DEPLOYED,
  headers:{
    "Authorization":`Bearer ${jwt}`,
    'Content-Type':"application/json"
  }
});




export default api;
