export class AuthenticationService{
    private loginStatus: boolean = false;

    getLoginStatus(){
        return this.loginStatus;
    }

    doLogin(){
        this.loginStatus = true;
    }

    doLogout(){
        this.loginStatus = false;
    }

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout( () => resolve(this.loginStatus),500 );
            }
        );
        return promise;
    }
}