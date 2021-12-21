import { UserModel } from "../DB/Implementations/CreateUserSchema";

import { IUser } from "../Models/IUser";

export class FindUserUseCase{

    static async userExist(email:string):Promise<boolean>{

        const user = await UserModel.exists({email:email})


        return user
    }
    static async findUserByEmail(email:string):Promise<IUser>{

         const user = await  UserModel.findOne({email:email})
         
                  return user
              }
}

 


        
