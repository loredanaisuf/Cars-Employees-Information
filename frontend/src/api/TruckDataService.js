import axios from 'axios'
import { API_URL } from '../Constants'

class TruckDataService {

    retrieveTrucks(name, token) {
        return axios.get(`${API_URL}/${name}/trucks`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    retrieveTruck(name, id, token) {
        return axios.get(`${API_URL}/${name}/trucks/${id}`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    deleteTruck(name, id, token) {
        return axios.delete(`${API_URL}/${name}/trucks/${id}`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    updateTruck(name, id, truck, token) {
        return axios.put(`${API_URL}/${name}/trucks/${id}`, truck,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    createTruck(name, truck, token) {
        return axios.post(`${API_URL}/${name}/trucks/`, truck,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

}

export default new TruckDataService()