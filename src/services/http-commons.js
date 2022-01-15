import axios from "axios";

let http;

http = axios.create ({
    baseURL:process.env.REACT_APP_API_URL,
    headers : {
         'Content-type': 'application/json'
    }
})

export default http