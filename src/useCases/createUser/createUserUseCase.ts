import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/interface/UserRepository";


export class createUserUsecase {
    constructor(private UserRespository:IUserRepository){}

    async execute(user:User){
    let alreadyExist =  this.UserRespository.FindByEmail(user.getEmail()) 
        if(alreadyExist){
            throw new Error("User already exist")
        }else{
            this.UserRespository.save(user)
        }
     
    }
}