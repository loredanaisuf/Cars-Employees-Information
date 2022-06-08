import axios from 'axios'
import { API_URL } from '../Constants'

class CarDataService {

    retrieveCars(name) {
        return axios.get(`${API_URL}/${name}/cars`);
    }

    retrieveCar(name, id) {
        return axios.get(`${API_URL}/${name}/cars/${id}`);
    }

    deleteCar(name, id) {
        return axios.delete(`${API_URL}/${name}/cars/${id}`);
    }

    updateCar(name, id, car) {
        return axios.put(`${API_URL}/${name}/cars/${id}`, car);
    }

    createCar(name, car) {
        console.log("transmited car:" + car.ITPValidity)
        return axios.post(`${API_URL}/${name}/cars/`, car);
    }

}

export default new CarDataService()