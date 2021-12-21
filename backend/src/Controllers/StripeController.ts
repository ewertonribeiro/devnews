import { FindUserUseCase } from './../UseCase/FindUserUseCase';
import {Stripe} from '../Services/Stripe'
import {Request , Response} from 'express'
import { CreateStripeCustumerUseCase } from '../UseCase/CreateCustomerStripeUseCase';
import { UserModel } from '../DB/Implementations/CreateUserSchema';




class StripeController{

    static async retrievPrice(req:Request , res:Response){

        const price = await Stripe.prices.retrieve('price_1K71O3L8Wum4uTvxy0Kdpo2x')


        res.status(200).json({price:price.unit_amount})
    }

    static async checkout(req:Request , res:Response):Promise<Response>{

        const {email} = req.body;

        const mongoClient = await FindUserUseCase.findUserByEmail(email)

        if(!mongoClient){
            return res.status(404).json({error:"you must be logged in"})
        }

        const stripeCustumerList = (await Stripe.customers.list()).data

        const stripeCustumerExists = stripeCustumerList.find(custumer => custumer.email === mongoClient.email)

        if (stripeCustumerExists) {
            

            await UserModel.findOneAndUpdate(mongoClient ,{stripeId:stripeCustumerExists.id}) 

            const session =   await Stripe.checkout.sessions.create({
                line_items:[{
                    price:'price_1K71O3L8Wum4uTvxy0Kdpo2x',
                    quantity:1,
                }],
                customer:stripeCustumerExists.id,
                mode:'subscription',
                payment_method_types:['card' ],
                success_url:'http://localhost:3000',
                cancel_url:'http://www.google.com',
                
            })
            
            return res.status(200).json({sessionId:session.id})
        }

        const stripeCustumer = await CreateStripeCustumerUseCase.create({
            email:email,
            fullName:mongoClient.fullName
        })

         await UserModel.findOneAndUpdate(mongoClient ,{stripeId:stripeCustumer.id}) 

        const session =   await Stripe.checkout.sessions.create({
               line_items:[{
                   price:'price_1K71O3L8Wum4uTvxy0Kdpo2x',
                   quantity:1,
               }],
               customer:stripeCustumer.id,
               mode:'subscription',
               payment_method_types:['card' ],
               success_url:'http://localhost:3000',
               cancel_url:'http://www.google.com',
               
           })
   
           return  res.status(200).json({id:session.id})



        }

    
    }
    
    export {StripeController}
    

        