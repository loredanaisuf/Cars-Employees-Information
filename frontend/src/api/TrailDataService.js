import axios from 'axios'
import { API_URL } from '../Constants'

class TrailDataService {

    retrieveAllTrails(name) {
        return axios.get(`${API_URL}/${name}/trails`);
    }

    retrieveTrail(name, id) {
        return axios.get(`${API_URL}/${name}/trails/${id}`);
    }

    deleteTrail(name, id) {
        return axios.delete(`${API_URL}/${name}/trails/${id}`);
    }

    updateTrail(name, id, trail) {
        return axios.put(`${API_URL}/${name}/trails/${id}`, trail);
    }

    createTrail(name, trail) {
        console.log("transmited trail:" + trail.ITPValidity)
        return axios.post(`${API_URL}/${name}/trails/`, trail);
    }

}

export default new TrailDataService()