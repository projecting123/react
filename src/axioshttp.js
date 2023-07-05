import axios from "axios"

const axioshttp = axios.create({baseURL: "https://larastore1235.000webhostapp.com/api/", headers:{'Accept': 'application/json'}});
export default axioshttp