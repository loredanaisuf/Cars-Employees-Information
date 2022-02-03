import axios from 'axios';
import {API_URL} from '../Constants.js';

class EmployeeInformatioService {

    retrieveAllEmployees() {
        //console.log('executed service')
        return axios.get(`${API_URL}/employees`);
    }

    retrieveEmployee(id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/employees/${id}`);
    }

    deleteEmployee(id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/employees/${id}`);
    }

    updateEmployee(id, employee) {
        //console.log('executed service')
        return axios.put(`${API_URL}/employees/${id}`, employee);
    }

    createEmployee(employee) {
        //console.log('executed service')
        return axios.post(`${API_URL}/employees/`, employee);
    }

}

export default new EmployeeInformatioService()