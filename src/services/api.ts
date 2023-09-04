import axios from "axios";

export const api = axios.create({
    baseURL: "https://adonis-e4mg.onrender.com",
    headers: {
        Accept: 'application/json'
    }

})