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

const updateUserAPI = (_id, fullName, phone, avatar) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id : _id,
        fullName: fullName,
        phone: phone,
        avatar: avatar

        // or you can code : { fullName, email, password, phone }
    }
    return axios.put(URL_BACKEND, data)
}

const deleteUserAPI = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`;
    return axios.delete(URL_BACKEND)
    

}

const getAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND)
}

const  UploadFileAPI = (file, folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;
    let config = {
        headers: {
          "upload-type": folder,
          "Content-Type": "multipart/form-data"
        }
      }
      const bodyFormData = new FormData();
      bodyFormData.append("fileImg", file) // key, value truyen vao
    return axios.post(URL_BACKEND, bodyFormData, config)
}


export {
    createUserAPI,
    updateUserAPI,
    getAllUserAPI,
    deleteUserAPI,
    UploadFileAPI
}