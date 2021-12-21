import { IUser } from '../Models/IUser';

import { CreateUserUseCase } from '../UseCase/CreateUserUseCase'; 

import { FindUserUseCase } from '../UseCase/FindUserUseCase';

import {Request , Response} from 'express'
// import { UserModel } from '../DB/Implementations/CreateUserSchema';

class UserController{

    static async createUser(req:Request,res:Response):Promise<Response<any, Record<string, any>>>{
        const {GitHubId  , fullName , email , avatar } = req.body as IUser;

        const CreateuserUseCase = new CreateUserUseCase()

       const user =await CreateuserUseCase.createUser({GitHubId , fullName , email , avatar})

       if(!user){
         return res.json({user:'user exists'})
       }

        return res.status(201).json(user)
    }
    static async FindUserByEmail(req:Request,res:Response):Promise<Response<IUser>>{

      const {email}: IUser = req.body;

      const user = await FindUserUseCase.findUserByEmail(email)

      return res.json(user)

    }

}



export {UserController}