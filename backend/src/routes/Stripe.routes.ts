import {Stripe as stripe} from '../Services/Stripe'
// import { IUser } from './../../../frontend/src/Models/IUser';
import express, {Router} from 'express'

import {StripeController} from '../Controllers/StripeController'

// import {Readable} from 'stream';

import Stripe  from 'stripe'

 const StripeRoutes= Router()

StripeRoutes.get('/prices',(req,res)=>{
    StripeController.retrievPrice(req,res)
})
StripeRoutes.post('/checkout',(req,res)=>{
    StripeController.checkout(req,res)
})


StripeRoutes.post("/stripe/webhooks" , express.raw({type: 'application/json'}),async (req,res)=>{

    const sig = req.headers['stripe-signature'];

    const webHookSecret:string = 'whsec_bIhFGfLqyhkwSm06EpTGptrkQBD3He6y'
    
    let event: Stripe.Event;

    
      event = stripe.webhooks.constructEvent(req.body, sig, webHookSecret);
  
      // On error, log and return the error message
   

    // Successfully constructed event
    console.log('✅ Success:', event.id);

    // Cast event data to Stripe object
    if (event.type === 'payment_intent.succeeded') {
      const stripeObject: Stripe.PaymentIntent = event.data
        .object as Stripe.PaymentIntent;
      console.log(`💰 PaymentIntent status: ${stripeObject.status}`);
    } else if (event.type === 'charge.succeeded') {
      const charge = event.data.object as Stripe.Charge;
      console.log(`💵 Charge id: ${charge.id}`);
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event
    res.json({received: true});
})


// 
// whsec_bIhFGfLqyhkwSm06EpTGptrkQBD3He6y

export {StripeRoutes}