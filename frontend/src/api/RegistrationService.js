import axios from 'axios'
import { API_URL } from '../Constants'

class RegistrationService {

    registerCompany(company) {
        return axios.post(`${API_URL}/registerCompany/`, company);
    }

    registerUser(user, companyName) {
        return axios.post(`${API_URL}/registerUser/`, user, companyName);
    }

    verifyUsername(username){
        return axios.get(`${API_URL}/company/${username}`)
    }
}

export default new RegistrationService()