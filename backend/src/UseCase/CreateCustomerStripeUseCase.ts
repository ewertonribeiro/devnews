
import {Stripe} from '../Services/Stripe'

interface Request {
    email:string,
    fullName:string
}

export class CreateStripeCustumerUseCase{


    static async create({email , fullName}:Request){


        if(!email || !fullName ){
            return
        }

        const clientStripe = await Stripe.customers.create({
          email:email ,
          name: fullName,
        })

        return clientStripe

    } 

}