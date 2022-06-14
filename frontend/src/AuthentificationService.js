import axios from 'axios'
import { API_URL } from './Constants'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const TOKEN = 'token'

class AuthenticationService {
    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }

    registerSuccessfulLoginForJwt(username, token) {
        console.log("register successfull")
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        localStorage.setItem(TOKEN, token)
        console.log("the token is: " + token )
        //this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    setupAxiosInterceptors(token) {
        console.log("Hello from interceptor ")
        axios.interceptors.request.use(
            (config) => {
                console.log("the header is: " + config.headers.authorization)
                if (this.isUserLoggedIn()) {
                    //config.headers.authorization = token
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

    registerSuccessfulLogIn(username, password){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        localStorage.removeItem(TOKEN);
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user == null){
            console.log("User is not authentificated")
            return false;
        }
        console.log("User is authentificated")
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }
}

export default new AuthenticationService()