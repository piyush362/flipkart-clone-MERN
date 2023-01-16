import axios from 'axios'

const URL = 'https://localhost:8000';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`http://localhost:8000/signup`, data)
    } catch (error) {
        console.log("error while calling signup api...", error.message)
    }
}
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`http://localhost:8000/login`, data)
    } catch (error) {
        console.log("error while calling signup api...", error.message)
    }
}

