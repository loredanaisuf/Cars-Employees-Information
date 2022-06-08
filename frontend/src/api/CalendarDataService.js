import axios from 'axios'
import { API_URL } from '../Constants'

class CalendarrDataService {

    retrieveEvents(name) {
        return axios.get(`${API_URL}/${name}/events`);
    }
}
export default new CalendarrDataService();