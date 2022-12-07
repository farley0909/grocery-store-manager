export class User {
    constructor 
    (
        private name:string,
        private email:string,
        private password:string
    ){}
    getName():string {
        return this.name
    }
    setName(name:string):void {
        this.name = name
    }
    getEmail():string {
        return this.email
    }
    setEmail(email:string):void {
        this.email = email
    }
    getPassword():string {
        return this.password
    }
    setPassword(password:string):void {
        this.password = password
    }

}