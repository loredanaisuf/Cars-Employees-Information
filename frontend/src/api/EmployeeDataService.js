import axios from 'axios';
import {API_URL} from '../Constants.js';

class EmployeeDataService {

    retrieveEmployees(name, token) {
        return axios.get(`${API_URL}/${name}/employees`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    retrieveEmployee(name, id, token) {
        return axios.get(`${API_URL}/${name}/employees/${id}`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    deleteEmployee(name,id, token) {
        return axios.delete(`${API_URL}/${name}/employees/${id}`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    updateEmployee(name, id, employee, token) {
        return axios.put(`${API_URL}/${name}/employees/${id}`, employee,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    createEmployee(name, employee, token) {
        return axios.post(`${API_URL}/${name}/employees/`, employee,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

}

export default new EmployeeDataService()