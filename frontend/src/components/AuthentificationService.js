class AuthenticationService {
    registerSuccessfulLogIn(username, password){
        sessionStorage.setItem("authenticatedUser", username);
    }

    logout(){
        sessionStorage.removeItem("authenticatedUser");
    }

    isUserLoggedId(){
        let user = sessionStorage.getItem("authenticatedUser");
        if(user == null){
            console.log("User is not authentificated")
            return false;
        }
        console.log("User is authentificated")
        return true;
    }
}

export default new AuthenticationService()