import axios from 'axios'
import { API_URL } from '../Constants'

class TrailDataService {

    retrieveAllTrails(name, token) {
        return axios.get(`${API_URL}/${name}/trails`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    retrieveTrail(name, id, token) {
        return axios.get(`${API_URL}/${name}/trails/${id}`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    deleteTrail(name, id, token) {
        return axios.delete(`${API_URL}/${name}/trails/${id}`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    updateTrail(name, id, trail, token) {
        return axios.put(`${API_URL}/${name}/trails/${id}`, trail,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

    createTrail(name, trail, token) {
        console.log("transmited trail:" + trail.ITPValidity)
        return axios.post(`${API_URL}/${name}/trails/`, trail,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }

}

export default new TrailDataService()