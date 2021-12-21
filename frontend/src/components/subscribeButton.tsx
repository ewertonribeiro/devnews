import { UseSession } from "../Hooks/useSession"
import { supabase } from "../Services/Supabase"
import axios from "axios"
import { GetStripe } from "../Services/Stripe"
import { baseUrl } from "../Api/BaseUrl"





export function SubscribeButton(){

    const {session} = UseSession()

    async function handleSubsCribe(){

        if(!session){
          await supabase.auth.signIn({
            provider:"github"
          })
        }

        
        const response = await axios.post(`${baseUrl}/checkout`,{
          email:session.user.email
      })

      const {sessionId} = await response.data;

      const stripe = await GetStripe();

      

        await stripe.redirectToCheckout({sessionId:sessionId})
        
      
      }


    return(
        <button onClick={handleSubsCribe}>Subscribe Now!!</button>
    )
}