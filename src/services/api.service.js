// import axios from "axios"
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone

            // or you can code : { fullName, email, password, phone }
        }
        return axios.post(URL_BACKEND, data)
}

const updateUserAPI = () => {
    
}

const getAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND)
}

export {
    createUserAPI,
    updateUserAPI,
    getAllUserAPI
}