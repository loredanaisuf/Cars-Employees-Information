import axios from 'axios'
import { API_URL } from '../Constants'

class TruckDataService {

    retrieveTrucks(name) {
        return axios.get(`${API_URL}/${name}/trucks`);
    }

    retrieveTruck(name, id) {
        return axios.get(`${API_URL}/${name}/trucks/${id}`);
    }

    deleteTruck(name, id) {
        return axios.delete(`${API_URL}/${name}/trucks/${id}`);
    }

    updateTruck(name, id, truck) {
        return axios.put(`${API_URL}/${name}/trucks/${id}`, truck);
    }

    createTruck(name, truck) {
        return axios.post(`${API_URL}/${name}/trucks/`, truck);
    }

}

export default new TruckDataService()