export class AuthorizationService{
    loginStatus = true;

    login(){
        this.loginStatus = true;
    }

    logout(){
        this.loginStatus = false;
    }

    isAuthorized(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout( () => resolve(this.loginStatus),500 );
            }
        );
        return promise;
    }
}