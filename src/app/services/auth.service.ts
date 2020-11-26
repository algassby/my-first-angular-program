

export class AuthService{
    isAuth = false;
    signIn(){
        return new Promise(
            (resolve, reject)=>{
                setTimeout(
                    ()=>{
                    this.isAuth = true;
                    console.log(this.isAuth);
                    resolve(true);
                },
                2000
                );
             }
        );
    }

    //sigout

    signOut(){
        this.isAuth=false;
        console.log(this.isAuth);
    }
  
}