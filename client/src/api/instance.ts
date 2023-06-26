import axios from "axios";
import Cookie from "universal-cookie";

export const cookie = new Cookie();

export const instance = axios.create({
    baseURL: "http://localhost:7000/",
    withCredentials: true
});

export const privateInstance = axios.create({
    baseURL: "http://localhost:7000/",
    withCredentials: true,
    headers: {
        "Authorization": `Bearer ${cookie.get("token")}`
    }
})
