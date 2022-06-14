import axios from 'axios'
import { API_URL } from '../Constants'

class CarDataService {

    retrieveCars(name, token) {
        return axios.get(`${API_URL}/${name}/cars`
        ,
            {
                headers: {
                    authorization: 'Bearer ' + token 
                }
            }
        );
    }

    retrieveCar(name, id, token) {
        return axios.get(`${API_URL}/${name}/cars/${id}`
        ,
            {
                headers: {
                    authorization: 'Bearer ' + token 
                }
            });
    }

    deleteCar(name, id, token) {
        return axios.delete(`${API_URL}/${name}/cars/${id}`
        ,
            {
                headers: {
                    authorization: 'Bearer ' + token 
                }
            });
    }

    updateCar(name, id, car, token) {
        return axios.put(`${API_URL}/${name}/cars/${id}`, car
        ,
            {
                headers: {
                    authorization: 'Bearer ' + token 
                }
            });
    }

    createCar(name, car, token) {
        console.log("transmited car:" + car.ITPValidity)
        return axios.post(`${API_URL}/${name}/cars/`, car
        ,
            {
                headers: {
                    authorization: 'Bearer ' + token 
                }
            });
    }

}

export default new CarDataService()