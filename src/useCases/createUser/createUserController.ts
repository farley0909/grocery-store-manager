import { Request, Response } from "express";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/interface/UserRepository";
import { createUserUsecase } from "./createUserUseCase";

export class createUserController {
    constructor(private createUserUseCase:createUserUsecase,private userRepository:IUserRepository){

    }
    async handle(request:Request, response:Response){
        try {
            const {name, email, password } = request.body
            const user = new User(name, email, password)
            this.createUserUseCase.execute(user)
        } catch (error) {
            
        }
    }
}