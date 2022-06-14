import axios from 'axios'
import { API_URL } from '../Constants'

class CalendarrDataService {

    retrieveEvents(name, token) {
        return axios.get(`${API_URL}/${name}/events`,
        {
            headers: {
                authorization: 'Bearer ' + token 
            }
        });
    }
}
export default new CalendarrDataService();