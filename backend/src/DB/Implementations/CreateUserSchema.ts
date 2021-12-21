import {Schema , model} from 'mongoose'

import {IUser} from '../../Models/IUser'


const UserSchema = new Schema<IUser>({
    GitHubId:String,
    email:String,
    avatar:String,
    fullName:String,
    subscription:Boolean,
    stripeId:String
})

const UserModel = model<IUser>('Users' , UserSchema)


export {UserModel}

