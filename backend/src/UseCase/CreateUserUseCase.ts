import { UserModel } from '../DB/Implementations/CreateUserSchema';
import { IUser } from '../Models/IUser';

import {FindUserUseCase} from './FindUserUseCase'

import {CreateStripeCustumerUseCase} from './CreateCustomerStripeUseCase'

// import {StripeController} from '../Controllers/StripeController'

class CreateUserUseCase{
    

     async createUser({email ,fullName ,GitHubId , avatar }:IUser):Promise<IUser | null>{

         const UserExists = await FindUserUseCase.findUserByEmail(email)

         if(UserExists){

            return null
         }


        const newUser = new UserModel({
            GitHubId:GitHubId,
            email:email,
            fullName:fullName,
            avatar:avatar,
            subscription:false,
            stripeId:null
        })
        await newUser.save();


        return newUser;
     }


}

export {CreateUserUseCase}